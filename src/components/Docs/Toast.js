import { useState } from "react";

export const Toast = () => {
  const [display, setDisplay] = useState("none");
  console.log(display);
  return (
    <div className="component">
      <h1>Toast</h1>
      <p className="component-text">
        Toasts are often used as a tooltips/popups to show a message at the
        bottom of the screen. The toasts will disappear in 5 seconds.
      </p>

      <div className="component-sub">
        <h3>Simple Toast</h3>
        <div class="flex-row justify-space-evenly component-box">
          <button
            onClick={() => {
              setDisplay("block");
              setTimeout(() => setDisplay("none"), 5000);
            }}
            className="button button-primary shadow"
          >
            Click Me!
          </button>

          <div
            className={`toast-content alert alert-success shadow ${
              display === "block" ? " showDisplay" : " "
            }`}
          >
            I am a Toast Message!
          </div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%250A%2520%2520className%253Dtoast-content%2520alert%2520alert-success%2520shadow%253E%250A%2520%2520I%2520am%2520a%2520Toast%2520Message%21%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};
