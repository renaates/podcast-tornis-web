import "firebase/firestore";
import { FirebaseAppProvider, useFirebaseApp, useUser } from "reactfire";
import React, { createContext, useContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2GSGi6Hu839QHyYH0Vc4hWIXjXr1-Als",
  authDomain: "tvg-podkasts.firebaseapp.com",
  projectId: "tvg-podkasts",
  storageBucket: "tvg-podkasts.appspot.com",
  messagingSenderId: "91306507538",
  appId: "1:91306507538:web:02eab9f5387d7e415407cb",
};

// Context that stores current user data
const AuthContext = createContext();

// Auth provider component that manages user state
export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AuthContext.Provider value={{ user }}>
        {children}
      </AuthContext.Provider>
    </FirebaseAppProvider>
  );
};

// Hook to access the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};