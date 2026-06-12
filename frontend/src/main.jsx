import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.jsx";
import store from "./redux/slices/store.js";

import { PlayerProvider } from "./context/PlayerContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </Provider>
  </StrictMode>
);