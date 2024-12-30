import React, { useState, useEffect } from "react";
import { useAuth } from "../FirebaseProvider";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "./Admin.css";
import "../app/App.css";

const Admin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const db = firebase.firestore();
  const storage = firebase.storage();

  const [episodes, setEpisodes] = useState([]);
  const [news, setNews] = useState([]);
  const [team, setTeam] = useState([]);

  const [newEpisode, setNewEpisode] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    number: 0,
    spotify: "",
    youtube: "",
  });

  const [newNews, setNewNews] = useState({
    id: "",
    title: "",
    text: "",
    image: "",
  });

  const [newTeam, setNewTeam] = useState({
    id: "",
    name: "",
    role: "",
    image: "",
    number: 0,
    active: true,
  });

  const [episodeImages, setEpisodeImages] = useState([]);
  const [uploadingImage] = useState(false);

  const [editingEpisode, setEditingEpisode] = useState(null);
  const [editingNews, setEditingNews] = useState(null);
  const [editingTeam, setEditingTeam] = useState(null);

  const [episodeErrors, setEpisodeErrors] = useState({
    title: "",
    description: "",
    url: "",
  });

  const [newsErrors, setNewsErrors] = useState({
    title: "",
    text: "",
  });

  const [teamErrors, setTeamErrors] = useState({
    name: "",
    role: "",
    number: "",
  });

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      } else {
        let isMounted = true;
        const fetchData = async () => {
          try {
            const episodesList = await db
              .collection("episodes")
              .orderBy("date", "desc") // Sort by 'date' field
              .get();

            if (isMounted) {
              const episodesData = episodesList.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setEpisodes(episodesData);

              const highestNumber = Math.max(...episodesData.map((ep) => ep.number), 0);
              setNewEpisode((prev) => ({
                ...prev,
                number: highestNumber + 1,
              }));
            }

            const newsList = await db
              .collection("news")
              .orderBy("date", "desc") // Sort by 'date' field
              .get();

            if (isMounted) {
              setNews(
                newsList.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }))
              );
            }

            const teamList = await db
              .collection("team")
              .orderBy("number", "asc") // Sort by 'number' field
              .get();

            if (isMounted) {
              setTeam(
                teamList.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }))
              );
            }

            const storageRef = storage.ref("rubrics");
            const imagesList = await storageRef.listAll();
            const imagesUrls = await Promise.all(imagesList.items.map((item) => item.getDownloadURL()));
            if (isMounted) {
              setEpisodeImages(
                imagesUrls.map((url) => {
                  const fileNameWithExtension = url.split("2F").pop();
                  const fileName = fileNameWithExtension.split(".")[0];
                  return { name: fileName, url: url };
                })
              );
            }
          } catch (error) {
            alert("Neparedzēta sistēmas kļūda. Lūdzu mēģiniet vēlreiz vai kontaktējaties ar lapas uzturētāju.");
          }
        };

        fetchData();
      }
    });
    return () => unsubscribe();
  }, [navigate, db, storage]);

  const handleAddEpisode = async (e) => {
    e.preventDefault();

    // Validation
    const errors = [];

    if (!newEpisode.title) {
      errors.title = "Šis lauks ir obligāts!";
    } else if (newEpisode.title.length > 100) {
      errors.title = "Nekorekti dati! Nosaukuma garumam jābūt līdz 100 simboliem!";
    }

    if (!newEpisode.description) {
      errors.description = "Šis lauks ir obligāts!";
    } else if (newEpisode.description.length > 500) {
      errors.description = "Nekorekti dati! Apraksta garumam jābūt līdz 500 simboliem!";
    }

    if (!newEpisode.spotify && !newEpisode.youtube) {
      errors.url = "Vismaz viens no šiem laukiem ir obligāts!";
    }

    if (Object.keys(errors).length > 0) {
      setEpisodeErrors(errors);
      return;
    }

    setEpisodeErrors({ title: "", description: "", url: "" });

    try {
      let imageUrl = newEpisode.image;
      if (uploadingImage && newEpisode.image instanceof File) {
        const fileRef = storage.ref("rubrics").child(newEpisode.image.name);
        await fileRef.put(newEpisode.image);
        imageUrl = await fileRef.getDownloadURL();
      }

      if (editingEpisode) {
        // Update episode
        await db
          .collection("episodes")
          .doc(newEpisode.id)
          .update({
            title: newEpisode.title,
            description: newEpisode.description,
            spotify: newEpisode.spotify,
            youtube: newEpisode.youtube,
            image: imageUrl || newEpisode.image,
          });
        alert("Vienums saglabāts!");
        setEditingEpisode(false);
      } else {
        // Add episode
        await db.collection("episodes").add({
          title: newEpisode.title,
          description: newEpisode.description,
          spotify: newEpisode.spotify,
          youtube: newEpisode.youtube,
          image: imageUrl,
          number: parseInt(newEpisode.number),
          date: firebase.firestore.FieldValue.serverTimestamp(),
        });
        alert("Vienums pievienots!");
      }

      window.location.reload();
      setNewEpisode({

        title: "",
        description: "",
        image: "",
        number: 0,
        spotify: "",
        youtube: "",
      });
    } catch (error) {
      alert("Neparedzēta sistēmas kļūda. Lūdzu mēģiniet vēlreiz vai kontaktējaties ar lapas uzturētāju.");
    }
  };

  const handleAddNews = async (e) => {
    e.preventDefault();

    // Validation
    const errors = [];

    if (!newNews.title) {
      errors.title = "Šis lauks ir obligāts!";
    } else if (newNews.title.length > 50) {
      errors.title = "Nekorekti dati! Nosaukuma garumam jābūt līdz 50 simboliem!";
    }

    if (!newNews.text) {
      errors.text = "Šis lauks ir obligāts!";
    } else if (newNews.text.length > 1000) {
      errors.text = "Nekorekti dati! Apraksta garumam jābūt līdz 1000 simboliem!";
    }

    if (!newNews.image) {
      errors.image = "Šis lauks ir obligāts!";
    } else if (newNews.image instanceof File && !["image/jpeg", "image/jpg", "image/png"].includes(newNews.image.type)) {
      errors.image = "Nekorekti dati! Attēlam jābūt .jpeg, .jpg vai .png formātā!";
    }

    if (Object.keys(errors).length > 0) {
      setNewsErrors(errors);
      return;
    }

    setNewsErrors({ title: "", text: "", image: "" });

    try {
      let imageUrl = newNews.image;
      if (newNews.image instanceof File) {
        const fileRef = storage.ref("news").child(newNews.image.name);
        await fileRef.put(newNews.image);
        imageUrl = await fileRef.getDownloadURL();
      }

      if (editingNews) {
        // Update news
        await db
          .collection("news")
          .doc(newNews.id)
          .update({
            title: newNews.title,
            text: newNews.text,
            image: imageUrl || newNews.image,
          });
        alert("Vienums saglabāts!");
      } else {
        // Add news
        await db.collection("news").add({
          title: newNews.title,
          text: newNews.text,
          image: imageUrl,
          date: firebase.firestore.FieldValue.serverTimestamp(),
        });

        alert("Vienums pievienots!");
      }

      window.location.reload();
      setNewNews({

        title: "",
        text: "",
        image: "",
      });
      setEditingNews(false);
    } catch (error) {
      alert("Neparedzēta sistēmas kļūda. Lūdzu mēģiniet vēlreiz vai kontaktējaties ar lapas uzturētāju.");
    }
  };

  const handleAddTeam = async (e) => {
    e.preventDefault();

    // Validation
    const errors = [];

    if (!newTeam.name) {
      errors.name = "Šis lauks ir obligāts!";
    } else if (newTeam.name.length > 30) {
      errors.name = "Nekorekti dati! Vārda garumam jābūt līdz 30 simboliem!";
    }

    if (!newTeam.image) {
      errors.image = "Šis lauks ir obligāts!";
    } else if (newTeam.image instanceof File && !["image/jpeg", "image/jpg", "image/png"].includes(newTeam.image.type)) {
      errors.image = "Nekorekti dati! Attēlam jābūt .jpeg, .jpg vai .png formātā!";
    }

    if (newTeam.role && newTeam.role.length > 60) {
      errors.role = "Nekorekti dati! Lomas garumam jābūt līdz 60 simboliem!";
    }

    if (isNaN(newTeam.number)) {
      errors.number = "Nekorekti dati! Ievadiet skaitli!";
    } else if (newTeam.number >= 100) {
      errors.number = "Nekorekti dati! Ievadiet skaitli zem 100!";
    }

    if (Object.keys(errors).length > 0) {
      setTeamErrors(errors);
      return;
    }

    setTeamErrors({ name: "", role: "", image: "", number: "" });

    try {
      let imageUrl = newTeam.image;
      if (newTeam.image instanceof File) {
        const fileRef = storage.ref("team").child(newTeam.image.name);
        await fileRef.put(newTeam.image);
        imageUrl = await fileRef.getDownloadURL();
      }

      if (editingTeam) {
        // Update team member
        await db
          .collection("team")
          .doc(newTeam.id)
          .update({
            name: newTeam.name,
            role: newTeam.role,
            image: imageUrl || newTeam.image,
            active: newTeam.active,
            number: newTeam.number,
          });
        alert("Vienums saglabāts!");
      } else {
        // Add team member
        await db.collection("team").add({
          name: newTeam.name,
          role: newTeam.role,
          image: imageUrl,
          active: newTeam.active,
          number: newTeam.number,
        });

        alert("Vienums pievienots!");
      }

      window.location.reload();
      setNewTeam({

        name: "",
        role: "",
        image: "",
        number: 0,
        active: true,
      });
      setEditingTeam(false);
    } catch (error) {
      alert("Neparedzēta sistēmas kļūda. Lūdzu mēģiniet vēlreiz vai kontaktējaties ar lapas uzturētāju.");
    }
  };

  const handleEditEpisode = (episode) => {
    setNewEpisode(episode);
    setEditingEpisode(true);
  };

  const handleEditNews = (newsItem) => {
    setNewNews(newsItem);
    setEditingNews(true);
  };

  const handleEditTeam = (teamMember) => {
    setNewTeam(teamMember);
    setEditingTeam(true);
  };

  const handleExitEditing = (prev) => {
    setEditingEpisode(false);
    setEditingNews(false);
    setEditingTeam(false);

    setNewEpisode(() => ({
      title: "",
      description: "",
      image: "",
      spotify: "",
      youtube: "",
      number: Math.max(...episodes.map((ep) => ep.number), 0) + 1,
    }));

    setNewNews({
      title: "",
      text: "",
      image: "",
    });

    setNewTeam({
      name: "",
      role: "",
      image: "",
      number: 0,
      active: true,
    });
  };

  const handleDelete = async (id, type) => {
    const confirmDelete = window.confirm(`Vai esi pārliecināts? Tu dzēsīsi šo vienumu.`);
    if (confirmDelete) {
      try {
        await db.collection(type).doc(id).delete();
        alert("Vienums dzēsts!");
        window.location.reload();
      } catch (error) {
        console.log("Neparedzēta sistēmas kļūda. Lūdzu mēģiniet vēlreiz vai kontaktējaties ar lapas uzturētāju.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigate("/login");
    } catch (error) {
      alert("Neparedzēta sistēmas kļūda. Lūdzu mēģiniet vēlreiz vai kontaktējaties ar lapas uzturētāju.");
    }
  };

  if (!user) {
    return <p className="wait-message">Lūdzu uzgaidi...</p>;
  }

  return (
    <div className="admin-container">
      <button onClick={handleLogout}>Atteikties</button>
      <h1>Podkāsts Tornis</h1>
      <div className="forms-container">
        <div className="form-container">
          {/* Episode Form */}
          <form onSubmit={handleAddEpisode} className="admin-form">
            <div>
              <h3>{editingEpisode ? "Rediģēt Epizodi" : "Pievienot epizodi"}</h3>
              {editingEpisode && (
                <>
                  <button type="button" onClick={handleExitEditing}>
                    Beigt rediģēt
                  </button>
                  <button type="button" onClick={() => handleDelete(newEpisode.id, "episodes")} className="delete-button">
                    Dzēst
                  </button>
                </>
              )}
              <input type="number" id="episode-number" disabled value={newEpisode.number} />
              <textarea placeholder="Nosaukums" value={newEpisode.title} onChange={(e) => setNewEpisode({ ...newEpisode, title: e.target.value })} />
              {episodeErrors.title && <p className="error-message">{episodeErrors.title}</p>}
              <textarea placeholder="Apraksts" className="large-textarea" value={newEpisode.description} onChange={(e) => setNewEpisode({ ...newEpisode, description: e.target.value })} />
              {episodeErrors.description && <p className="error-message">{episodeErrors.description}</p>}
              <div className="rubric-container">
                <label>Rubrika:</label>
                <select value={newEpisode.image} onChange={(e) => setNewEpisode({ ...newEpisode, image: e.target.value })}>
                  {episodeImages.map((image, index) => (
                    <option key={index} value={image.url}>
                      {image.name}
                    </option>
                  ))}
                </select>
              </div>
              <input type="text" placeholder="Spotify URL" value={newEpisode.spotify} onChange={(e) => setNewEpisode({ ...newEpisode, spotify: e.target.value })} />
              <input type="text" placeholder="YouTube URL" value={newEpisode.youtube} onChange={(e) => setNewEpisode({ ...newEpisode, youtube: e.target.value })} />
              {episodeErrors.url && <p className="error-message">{episodeErrors.url}</p>}
            </div>
            <button type="submit" className="submit-button">
              {newEpisode.id ? "Saglabāt" : "Pievienot"}
            </button>
          </form>
        </div>

        {/* News Form */}
        <div className="form-container">
          <form onSubmit={handleAddNews} className="admin-form">
            <div>
              <h3>{editingNews ? "Rediģēt jaunumu" : "Pievienot jaunumu"}</h3>
              {editingNews && (
                <>
                  <button type="button" onClick={handleExitEditing}>
                    Beigt rediģēt
                  </button>
                  <button type="button" onClick={() => handleDelete(newNews.id, "news")} className="delete-button">
                    Dzēst
                  </button>
                </>
              )}
              <textarea placeholder="Nosaukums" value={newNews.title} onChange={(e) => setNewNews({ ...newNews, title: e.target.value })} />
              {newsErrors.title && <p className="error-message">{newsErrors.title}</p>}
              <textarea placeholder="Teksts" className="large-textarea" value={newNews.text} onChange={(e) => setNewNews({ ...newNews, text: e.target.value })} />
              {newsErrors.text && <p className="error-message">{newsErrors.text}</p>}
              <div className="rubric-container">
                <label>Attēls:</label>
                <input type="file" accept="image/*" onChange={(e) => setNewNews({ ...newNews, image: e.target.files[0] })} />
                {newsErrors.image && <p className="error-message">{newsErrors.image}</p>}
              </div>
            </div>
            <button type="submit" className="submit-button">
              {editingNews ? "Saglabāt" : "Pievienot"}
            </button>
          </form>
        </div>

        {/* Team Form */}
        <div className="form-container">
          <form onSubmit={handleAddTeam} className="admin-form">
            <div>
              <h3>{editingTeam ? "Rediģēt komandas biedru" : "Pievienot komandas biedru"}</h3>
              {editingTeam && (
                <>
                  <button type="button" onClick={handleExitEditing}>
                    Beigt rediģēt
                  </button>
                  <button type="button" onClick={() => handleDelete(newTeam.id, "team")} className="delete-button">
                    Dzēst
                  </button>
                </>
              )}
              <input type="text" placeholder="Vārds" value={newTeam.name} onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })} />
              {teamErrors.name && <p className="error-message">{teamErrors.name}</p>}
              <input type="text" placeholder="Loma" value={newTeam.role} onChange={(e) => setNewTeam({ ...newTeam, role: e.target.value })} />
              {teamErrors.role && <p className="error-message">{teamErrors.role}</p>}
              <div>
                <label>Attēls:</label>
                <input type="file" accept="image/*" onChange={(e) => setNewTeam({ ...newTeam, image: e.target.files[0] })} />
                {teamErrors.image && <p className="error-message">{teamErrors.image}</p>}
              </div>
              <div>
                <label>
                  Kārtas numurs: <i>(var atstāt 0)</i>
                </label>
                <input type="number" placeholder="Numurs" value={newTeam.number} onChange={(e) => setNewTeam({ ...newTeam, number: parseInt(e.target.value, 10) })} />
                {teamErrors.number && <p className="error-message">{teamErrors.number}</p>}
              </div>

              <div className="checkbox-container">
                <label>Aktīvs:</label>
                <input type="checkbox" checked={newTeam.active} onChange={(e) => setNewTeam({ ...newTeam, active: e.target.checked })} />
              </div>
            </div>
            <button type="submit" className="submit-button">
              {editingTeam ? "Saglabāt" : "Pievienot"}
            </button>
          </form>
        </div>
      </div>

      <h2 className="sub-title">Rediģēt esošos vienumus:</h2>

      {/* Episode List */}
      <div className="edits-container">
        <div className="content-list">
          <h3>Epizodes</h3>
          <ul>
            {episodes.map((episode) => (
              <li key={episode.id} onClick={() => handleEditEpisode(episode)}>
                {episode.title}
              </li>
            ))}
          </ul>
        </div>

        {/* News List */}
        <div className="content-list">
          <h3>Jaunumi</h3>
          <ul>
            {news.map((newsItem) => (
              <li key={newsItem.id} onClick={() => handleEditNews(newsItem)}>
                {newsItem.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Team List */}
        <div className="content-list">
          <h3>Komanda</h3>
          <ul>
            {team.map((member) => (
              <li key={member.id} onClick={() => handleEditTeam(member)}>
                {member.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
