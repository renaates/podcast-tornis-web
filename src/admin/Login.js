import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigate("/admin");
      }
    });
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Aizpildi visus laukus!");
      return;
    }
    try {
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate("/admin");
    } catch (err) {
      setError("Kļūda. Pārbaudi ievadītos datus.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Podkāsts Tornis</h2>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">E-pasts</label>
            <input name="email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="E-pasta adrese" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Parole</label>
            <input name="password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Jūsu parole" />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-btn" onClick={handleLogin}>
            Pieteikties
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
