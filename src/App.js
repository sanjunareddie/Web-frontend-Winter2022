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
import HousesList from "./components/HousesList";
import AddHouse from "./components/AddHouse";
import HouseDetail from "./components/HouseDetail";
import HouseEdit from "./components/HouseEdit";
import DeleteHouse from "./components/DeleteHouse";

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

          {/* Houses */}
          <Route path="/houses" element={ <PrivateRoute>
            <HousesList />
            </PrivateRoute>}></Route>
          <Route path="/add-house" element={<PrivateRoute>
            <AddHouse />
            </PrivateRoute>}></Route>
          <Route path="/house/:id" element={<PrivateRoute><HouseDetail />
          </PrivateRoute>}></Route>
          <Route exact path="/house/:id/edit" element={<PrivateRoute>
            <HouseEdit />
            </PrivateRoute>}></Route>
          <Route exact path="/house/:id/delete" element={<PrivateRoute>
            <DeleteHouse />
            </PrivateRoute>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
