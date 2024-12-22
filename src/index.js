import ReactDOM from "react-dom";
import App from "./app/App";
import { FirebaseProvider } from "./FirebaseProvider";

ReactDOM.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>,
  document.querySelector("[data-container='root']")
);