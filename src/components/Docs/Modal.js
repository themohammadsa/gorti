import { useState } from "react";

export const Modal = () => {
  const [display, setDisplay] = useState("none");
  return (
    <div className="component">
      <h1>Modal</h1>
      <p className="component-text">
        The modal component provides a solid foundation for creating dialogs,
        popovers, lightboxes, or whatever else.
      </p>

      <div className="component-sub">
        <h3>Simple Modal</h3>
        <div class="justify-space-evenly component-box">
          <button
            onClick={() => setDisplay("block")}
            className="button button-primary shadow"
          >
            Click Me!{" "}
          </button>

          <div
            className={`modal ${display === "block" ? " showDisplay" : " "}`}
          >
            <div className="modal-content card pad1rem">
              <button onClick={() => setDisplay("none")} class="button-dismiss">
                ×
              </button>
              <p className="card-text">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate ratione rerum at quis velit esse quasi exercitationem
                maiores expedita deleniti illum excepturi, officia molestias,
                voluptas vero praesentium quae sequi perspiciatis.{" "}
              </p>
            </div>
          </div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522modal%2522%250A%2520%2520%253Cdiv%2520className%253D%2522modal-content%2520card%2520pad1rem%2522%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522button-dismiss%2522%253E%2520%25C3%2597%2520%2520%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cp%2520className%253D%2522card-text%2522%253E%2520...%2520%253C%252Fp%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};
