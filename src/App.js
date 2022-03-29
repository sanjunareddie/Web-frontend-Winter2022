import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBarBeforeLogin from "./components/NavBarBeforeLogin";
import NavBarAfterLogin from "./components/NavBarAfterLogin";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import SavedSearches from "./components/SavedSearches";
import { isLoggedIn } from "./utils/utility";

const PrivateRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/sign-in" replace={true} />;
};

const PublicRoute = ({ children }) => {
  return isLoggedIn() ? <Navigate to="/" replace={true} /> : children;
};

function App() {
  return (
    <>
      <div>
        <NavBarAfterLogin />
      </div>
      <div className="App center-signin-signup">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/saved-searches"
            element={
              <PrivateRoute>
                <SavedSearches />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/sign-in"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="/sign-up"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
