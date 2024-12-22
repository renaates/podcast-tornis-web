import React, { useState, useEffect } from "react";
import { useAuth } from "../FirebaseProvider";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "./Admin.css";

const Admin = () => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const db = firebase.firestore();
	const storage = firebase.storage();

	const [episodes, setEpisodes] = useState([]);
	const [news, setNews] = useState([]);
	const [team, setTeam] = useState([]);

	const [newEpisode, setNewEpisode] = useState({
		title: "",
		description: "",
		image: "",
		number: 0,
		spotify: "",
		youtube: "",
	});

	const [newNews, setNewNews] = useState({
		title: "",
		text: "",
		image: "",
	});

	const [newTeam, setNewTeam] = useState({
		name: "",
		role: "",
		image: "",
		number: 0,
		active: true,
	});

	const [episodeImages, setEpisodeImages] = useState([]);
	const [uploadingImage, setUploadingImage] = useState(false);

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}

		let isMounted = true;

		const fetchData = async () => {
			const episodesSnapshot = await db.collection("episodes").get();
			if (isMounted) {
				const episodesData = episodesSnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setEpisodes(episodesData);

				// Set the episode number to the highest existing in database (+1)
				const highestNumber = Math.max(...episodesData.map((ep) => ep.number), 0);
				setNewEpisode((prev) => ({ ...prev, number: highestNumber + 1 }));
			}

			const newsSnapshot = await db.collection("news").get();
			if (isMounted) {
				setNews(newsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			}

			const teamSnapshot = await db.collection("team").get();
			if (isMounted) {
				setTeam(teamSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			}

			// Fetch images from the "rubrics" folder for episodes
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
		};

		fetchData();

		return () => {
			isMounted = false;
		};
	}, [user, navigate, db, storage]);

	const handleAddEpisode = async (e) => {
		e.preventDefault();
		try {
			let imageUrl = newEpisode.image;
			if (uploadingImage) {
				const fileRef = storage.ref("rubrics").child(newEpisode.image.name);
				await fileRef.put(newEpisode.image);
				imageUrl = await fileRef.getDownloadURL();
			}

			await db.collection("episodes").add({
				...newEpisode,
				image: imageUrl,
				number: parseInt(newEpisode.number),
			});

			setNewEpisode({
				title: "",
				description: "",
				image: "",
				number: 0,
				spotify: "",
				youtube: "",
			});
			alert("Epizode pievienota!");
		} catch (error) {
			console.log("Kļūda: ", error);
		}
	};

	const handleAddNews = async (e) => {
		e.preventDefault();
		try {
			let imageUrl = newNews.image;
			if (newNews.image instanceof File) {
				const fileRef = storage.ref("news").child(newNews.image.name);
				await fileRef.put(newNews.image);
				imageUrl = await fileRef.getDownloadURL();
			}

			await db.collection("news").add({
				...newNews,
				date: firebase.firestore.FieldValue.serverTimestamp(),
				image: imageUrl,
			});
			setNewNews({
				title: "",
				text: "",
				image: "",
			});
			alert("Jaunums pievienots!");
		} catch (error) {
			console.log("Kļūda: ", error);
		}
	};

	const handleAddTeam = async (e) => {
		e.preventDefault();
		try {
			let imageUrl = newTeam.image;
			if (newTeam.image instanceof File) {
				const fileRef = storage.ref("team").child(newTeam.image.name);
				await fileRef.put(newTeam.image);
				imageUrl = await fileRef.getDownloadURL();
			}

			await db.collection("team").add({
				...newTeam,
				image: imageUrl,
			});
			setNewTeam({
				name: "",
				role: "",
				image: "",
				number: 0,
				active: true,
			});
			alert("Komandas biedrs pievienots!");
		} catch (error) {
			console.log("Kļūda: ", error);
		}
	};

	const handleLogout = async () => {
		try {
			await firebase.auth().signOut();
			navigate("/login");
		} catch (error) {
			console.error("Error: ", error);
		}
	};

	if (!user) {
		return <p>Lūdzu uzgaidi...</p>;
	}

	return (
		<div className="admin-container">
			<button onClick={handleLogout}>Izrakstīties</button>
			<h2>Podkāsts Tornis</h2>
			<div className="form-container">
				{/* Episode Form */}
				<form onSubmit={handleAddEpisode} className="admin-form">
					<h3>Epizodes</h3>
					<input type="number" id="episode-number" disabled value={newEpisode.number} onChange={(e) => setNewEpisode({ ...newEpisode, number: e.target.value })} />
					<textarea placeholder="Nosaukums" value={newEpisode.title} onChange={(e) => setNewEpisode({ ...newEpisode, title: e.target.value })} />
					<textarea placeholder="Apraksts" value={newEpisode.description} onChange={(e) => setNewEpisode({ ...newEpisode, description: e.target.value })} />
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
					<button type="submit">Pievienot</button>
				</form>

				{/* News Form */}
				<form onSubmit={handleAddNews} className="admin-form">
					<h3>Jaunumi</h3>
					<textarea placeholder="Nosaukums" value={newNews.title} onChange={(e) => setNewNews({ ...newNews, title: e.target.value })} />
					<textarea placeholder="Apraksts" value={newNews.text} onChange={(e) => setNewNews({ ...newNews, text: e.target.value })} />
					<label htmlFor="newsImage">Attēls:</label>
					<input type="file" name="newsImage" onChange={(e) => setNewNews({ ...newNews, image: e.target.files[0] })} />
					<button type="submit">Pievienot</button>
				</form>

				{/* Team Form */}
				<form onSubmit={handleAddTeam} className="admin-form">
					<h3>Komanda</h3>
					<input type="text" placeholder="Vārds" value={newTeam.name} onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })} />
					<input type="text" placeholder="Pienākumi" value={newTeam.role} onChange={(e) => setNewTeam({ ...newTeam, role: e.target.value })} />
					<label htmlFor="teamImage">Attēls:</label>
					<input type="file" name="teamImage" onChange={(e) => setNewTeam({ ...newTeam, image: e.target.files[0] })} />
					<div className="checkbox-container">
						<label htmlFor="isActive">Aktīvs?</label>
						<input type="checkbox" name="isActive" checked={newTeam.active} onChange={() => setNewTeam({ ...newTeam, active: !newTeam.active })} />
					</div>
					<button type="submit">Pievienot</button>
				</form>
			</div>
		</div>
	);
};

export default Admin;
