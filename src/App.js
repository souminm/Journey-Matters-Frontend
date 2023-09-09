import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import FunnyVideos from "./Component/FunnyVideos";
import CookingVideos from "./Component/CookingVideos";
import LifeStyleVideos from "./Component/LifeStyleVideos";
import Authentication from "./Component/Authentication";
import CreateListing from "./Component/CreateListing";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import "react-alice-carousel/lib/alice-carousel.css";
import "./App.css";
// import { useState } from "react";
// import EntertainmentImg from "./Images/Entertainment_img.jpg";
import ViewListing from "./Component/ViewListing";
import UpdateListing from "./Component/UpdateListing";
import FormContextProvider from "./Services/FormContext";
import AuthContextProvider from "./Services/AuthContext";
import AboutComponent from "./Component/AboutComponent";
function App() {
  // const [backgroundImage, setBackgroundImage] = useState(HomeImg);
  // function changeImg(img) {
  //   setBackgroundImage(img);
  // }
  return (
    <FormContextProvider>
    <AuthContextProvider>
      {" "}
      <div
        className="main-container "
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Router>
          <Header></Header>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  // onChange={() => {
                  //   changeImg(HomeImg);
                  // }}
                />
              }
            />
            <Route
              path="/funny"
              element={
                <FunnyVideos
                />
              }
            />
              <Route
              path="/about"
              element={
                <AboutComponent
                />
              }
            />
            <Route
              path="/cooking"
              element={
                <CookingVideos
                />
              }
            />
            <Route
              path="/lifestyle"
              element={
                <LifeStyleVideos
                />
              }
            />
            <Route
              path="/admin"
              element={
                <Authentication
                />
              }
            />
            <Route
              path="/view-listing"
              element={
                <ViewListing
                />
              }
            />
            <Route
              path="/create-listing"
              element={
                <CreateListing
                />
              }
            />
            <Route
              path="/update-listing/:id"
              element={
                <UpdateListing
                />
              }
            />
          </Routes>
          <div className="footer">
            <Footer></Footer>
          </div>
        </Router>
      </div>
      </AuthContextProvider>
    </FormContextProvider>
  );
}

export default App;
