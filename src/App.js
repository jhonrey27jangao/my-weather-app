import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./pages/home";
import Landing from "./pages/landing";
import Weather from "./pages/weather";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ProtectedRoute } from "./utils/helpers";

function App() {
  const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  return (
    <>
      <Auth0Provider
        domain={auth0Domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <Router>
          <div id="main">
            <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="weather"
                element={<ProtectedRoute component={Weather} />}
              />
              <Route
                path="home"
                element={<ProtectedRoute component={Home} />}
              />
              <Route path="*" element={<Landing />} />
            </Routes>
          </div>
        </Router>
      </Auth0Provider>
    </>
  );
}

export default App;
