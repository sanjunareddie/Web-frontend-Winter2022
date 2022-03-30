import "./App.css";
import "./css/extra.css";
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
import RentalForm from "./components/RentalForm";
import ViewApplicationStatus from "./components/ViewApplicationStatus";
import UpdateApplicationStatus from "./components/UpdateApplicationStatus";
import ApplicantDetails from "./components/ApplicantDetails";
import HouseDetail from "./components/HouseDetail";
import Forum from "./components/Forum/Forum";
import NewThread from "./components/Forum/NewThread";

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
      <div className="">
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
            path="/dashboard:houseid"
            element={
              <PrivateRoute>
                <HouseDetail />
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
          <Route
            exact
            path="/RentalForm"
            element={
              <PrivateRoute>
                <RentalForm />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/ViewApplicationStatus"
            element={
              <PrivateRoute>
                <ViewApplicationStatus />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/UpdateApplicationStatus"
            element={
              <PrivateRoute>
                <UpdateApplicationStatus />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/ApplicantDetails"
            element={
              <PrivateRoute>
                <ApplicantDetails />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/forum"
            element={
              <PrivateRoute>
                <Forum />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/thread"
            element={
              <PrivateRoute>
                <NewThread />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
