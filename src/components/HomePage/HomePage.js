import logo from "./logo.png";
import logotext from "./logotext.png";
import { Header } from "../Header/Header";

export const HomePage = ({ selectedTabToHeader }) => {
  return (
    <div className="homepage">
      <Header />
      <div className="homepage-content">
        <div className="flex-row flex-center">
          <img src={logo} className="homepage-logo" />

          <img src={logotext} className="homepage-logo-text pad1rem" />
        </div>

        <div className="homepage-text ">
          <h1>
            Rapidly build, design and customize responsive front-end framework
            with Gorti
          </h1>
        </div>

        <div className="flex-row flex-center">
          <button
            className="button button-homepage-primary shadow"
            onClick={() => selectedTabToHeader("Installation")}
          >
            Get Started{" "}
          </button>

          <a
            download
            href="https://gorti.netlify.app/styles.css"
            style={{
              textDecoration: "none"
            }}
          >
            <button className="button button-homepage-secondary shadow ">
              {" "}
              Download{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
