import "firebase/firestore";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyA2GSGi6Hu839QHyYH0Vc4hWIXjXr1-Als",
  authDomain: "tvg-podkasts.firebaseapp.com",
  projectId: "tvg-podkasts",
  storageBucket: "tvg-podkasts.appspot.com",
  messagingSenderId: "91306507538",
  appId: "1:91306507538:web:02eab9f5387d7e415407cb",
};

export const FirebaseProvider = ({ children }) => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    {children}
  </FirebaseAppProvider>
);
