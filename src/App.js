import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import NavBarBeforeLogin from "./components/NavBarBeforeLogin";
import NavBarAfterLogin from "./components/NavBarAfterLogin";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import SavedSearches from "./components/SavedSearches";

function App() {
  return (
    <>
      <div>
        <NavBarAfterLogin />
      </div>
      <div className="App center-signin-signup">
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/profile" element={<UserProfile />} />
          <Route exact path="/saved-searches" element={<SavedSearches />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
