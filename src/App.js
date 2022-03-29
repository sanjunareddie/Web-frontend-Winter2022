import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import NavBarBeforeLogin from "./components/NavBarBeforeLogin";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import HousesList from "./components/HousesList";
import AddHouse from "./components/AddHouse";
import HouseDetail from "./components/HouseDetail";
import HouseEdit from "./components/HouseEdit";
import DeleteHouse from "./components/DeleteHouse";

function App() {
  return (
    <>
      <NavBarBeforeLogin />

      <div className="App">
        {/* <div className="outer"> */}
          {/* <div className="inner"> */}
            <Routes>
              <Route exact path="/" element={<SignIn />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />

              {/* Houses */}
              <Route path="/houses" element={<HousesList />}></Route>
              <Route path="/add-house" element={<AddHouse />}></Route>
              <Route path="/house/:id" element={<HouseDetail />}></Route>
              <Route exact path="/house/:id/edit" element={<HouseEdit />}></Route>
              <Route exact path="/house/:id/delete" element={<DeleteHouse />}></Route>
            </Routes>
          {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
