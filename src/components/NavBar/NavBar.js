import { useState } from "react";
import ham from "./ham.png";
import logotext from "./logotext.png";

export const NavBar = ({ selectTab }) => {
  const handleToggle = () => setNavbarOpen((prev) => !prev);
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="navBar">
      <img src={ham} className="icon-ham" onClick={handleToggle}></img>

      <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 10px" }}
          className=" flex-row justify-space-between "
        >
             <a href="https://gorti.netlify.app/">
          <img src={logotext} className="logo-text pad1rem" /> </a>
          <span
            className="button-dismiss"
            onClick={handleToggle}
            style={{
              fontSize: "35px",
              color: "#023e8a",
              position: "relative",
              top: "-5px",
              padding: "0px 10px 0px 0px",
              cursor: "pointer"
            }}
          >
            ×{" "}
          </span>
        </div>
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: "700",
            opacity: "0.9",
            marginTop: "1.5rem",
            marginLeft: "3rem",
            color: "#023e8a",
            padding: "0.5rem 0rem"
          }}
        >
          GETTING STARTED
        </div>
        <div className="hamMenu-items">
          <div
            onClick={() => {
              selectTab("Installation");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            Installation
          </div>
        </div>

        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: "700",
            opacity: "0.9",
            marginTop: "1.5rem",
            marginLeft: "3rem",
            color: "#023e8a",
            padding: "0.5rem 0rem"
          }}
        >
          COMPONENTS
        </div>

        <div className="hamMenu-items">
          <div
            onClick={() => {
              selectTab("Avatar");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            Avatar{" "}
          </div>
          <div
            onClick={() => {
              selectTab("Alert");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            Alert{" "}
          </div>
          <div
            onClick={() => {
              selectTab("Badge");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            Badge{" "}
          </div>
          <div
            onClick={() => {
              selectTab("Button");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            Button{" "}
          </div>
          <div
            onClick={() => {
              selectTab("Card");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            Card{" "}
          </div>
          <div
            onClick={() => {
              selectTab("Image");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            Image{" "}
          </div>
          <div
            onClick={() => {
              selectTab("Input");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            Input{" "}
          </div>
          <div
            onClick={() => {
              selectTab("List");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            List{" "}
          </div>
          <div
            onClick={() => {
              selectTab("Navigation");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            Navigation{" "}
          </div>
          <div
            onClick={() => {
              selectTab("Modal");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            Modal{" "}
          </div>
          <div
            onClick={() => {
              selectTab("Toast");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            Toast{" "}
          </div>

          <div
            onClick={() => {
              selectTab("Grid");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            Simplified Grid{" "}
          </div>
          <div
            onClick={() => {
              selectTab("TextUtilities");
              handleToggle();
            }}
            className="hamMenu-div"
          >
            Text Utilities{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};
