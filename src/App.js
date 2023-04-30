import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn.jsx";
import SignUp from "./pages/signUp/SignUp.jsx";
import Home from "./pages/homePage/Home.jsx";
import store from "./component/storeComponent/store";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { LoggedSlice } from "./component/storeComponent/reducer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const PR = ({ children }) => {
  const auth = useSelector((state) => state.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.isLoggedIn) {
      navigate("/signin");
      console.log("navigating FormPR");
    }
  }, [auth]);

  return children;
};

function App() {
  const auth = useSelector((state) => state.logged);
  const disptach = useDispatch();

  const isFirstRender = useRef(true);
  useEffect(() => {
    console.log("second render");
    console.log("chand useEffect run",auth)

    if (isFirstRender.current) {
      const authFromLocal = JSON.parse(localStorage.getItem("auth"));
      disptach(LoggedSlice.actions.isLogged(authFromLocal));
      
    } else {
      localStorage.setItem("auth", JSON.stringify(auth));
    }
    isFirstRender.current = false;
  }, [auth]);

console.log('chand auth change',auth)
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PR>
              <Home />
            </PR>
          }
        />
        <Route
          path="/signin"
          element={
            <PR>
              <SignIn />
            </PR>
          }
        />
        <Route
          path="/signup"
          element={
            <PR>
              <SignUp />
            </PR>
          }
        />
        <Route
          path="/*"
          element={
            <PR>
              <Home />
            </PR>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
