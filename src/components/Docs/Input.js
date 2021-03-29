export const Input = () => {
  return (
    <div className="component">
      <h1>Input</h1>
      <p className="component-text">
        Easily extend form controls by adding text, buttons, or button groups on
        either side of textual inputs, custom selects, and custom file inputs.
      </p>

      <div className="component-sub">
        <h3>Textbox</h3>
        <div class="flex-row justify-space-evenly component-box">
          <input
            class="input-box shadow"
            type="text"
            placeholder="Enter Name"
          />
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cinput%2520class%253D%2522input-box%2520shadow%2522%2520type%253D%2522text%2522%2520placeholder%253D%2522Enter%2520Name%2522%2520%252F%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <div className="component-sub">
        <h3>Error Input</h3>
        <div class="flex-row justify-space-evenly  component-box">
          <input
            class="input-box shadow"
            type="email"
            placeholder="Enter Email"
          />
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cinput%2520class%253D%2522input-box%2520shadow%2522%2520type%253D%2522email%2522%2520placeholder%253D%2522Enter%2520Email%2522%2520%252F%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};
