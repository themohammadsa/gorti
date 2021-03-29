import logo from "./logo.png";
import logotext from "./logotext.png";
import github from "./github.svg";
import { NavBar } from "../NavBar/NavBar";

export const Header = ({ selectedTabToHeader }) => {
  return (
    <div>
      <header className="header ">
        <div className="header-content grid-header">
          <div className="flex-row column-header">
            <img src={logo} className="logo " />

            <img src={logotext} className="hide logo-text pad1rem" />
            <span className="dropdown">v1.0 </span>
          </div>
          <input
            className="search-box column-header hide"
            placeholder="Search the docs"
          />

          <div className="flex-row column-header ">
            <a href="https://github.com/themohammadsa/gorti">
              <img className="icon-github pad-right-1rem" src={github} />{" "}
            </a>
            <a
              download
              href="https://gorti.netlify.app/styles.css"
              style={{
                textDecoration: "none"
              }}
            >
              <button
                style={{
                  color: "#1e40af",
                  border: "2px solid #1E40AF",
                  marginTop: "0.5rem",
                  backgroundColor: "white"
                }}
                class="button hide "
              >
                Download
              </button>{" "}
            </a>
            <NavBar selectTab={selectedTabToHeader} />{" "}
          </div>
        </div>
      </header>
    </div>
  );
};
