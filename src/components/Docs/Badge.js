export const Badge = () => {
  return (
    <div className="component">
      <h1>Badge</h1>
      <p className="component-text">
        Badges are used to highlight an item's status for quick recognition.
      </p>

      <div className="component-sub">
        <h3>On Icon</h3>
        <div class="flex-row justify-space-evenly component-box">
          <div class="badge">
            <img
              class="icon"
              src="https://img.icons8.com/material/48/000000/important-mail.png"
            />
            <div class="badge-notification">9</div>
          </div>
          <div class="badge">
            <img
              class="icon"
              src="https://img.icons8.com/material-sharp/48/000000/fast-cart.png"
            />
            <div class="badge-notification">2</div>
          </div>
          <div class="badge">
            <img
              class="icon"
              src="https://img.icons8.com/ios-glyphs/30/000000/speech-bubble--v1.png"
            />
            <div class="badge-notification"> 7</div>
          </div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520class%253D%2522icon%2522%2520src%253D%2522...%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge-notification%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%25201%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <div className="component-sub">
        <h3>On Avatars</h3>
        <div class="flex-row justify-space-evenly component-box">
          <div class="badge">
            <img
              class="avatar-img shadow"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
            <div class="badge-notification">5</div>
          </div>
          <div class="badge ">
            <div class="avatar avatar-grey shadow">H</div>
            <div class="badge-notification"> 4</div>
          </div>
          <div class="badge">
            <img
              class="avatar-img shadow"
              src="https://miro.medium.com/max/1000/1*tv9pIQPhwumDnYBfCoapYg.jpeg"
            />
            <div class="badge-notification"> 1</div>
          </div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520class%253D%2522icon%2522%2520src%253D%2522...%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge-notification%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%25201%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};
