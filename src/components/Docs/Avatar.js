export const Avatar = () => {
  return (
    <div className="component">
      <h1>Avatars</h1>
      <p className="component-text">
        The Avatar component is used to represent a user, and displays the
        profile picture, initials or fallback icon.{" "}
      </p>

      <div className="component-sub">
        <h3>Image Avatars</h3>
        <div className="flex-row justify-space-evenly component-box">
          <img
            className="avatar-img shadow"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <img
            className="avatar-img shadow"
            src="https://avatars3.githubusercontent.com/u/100200?s=460&v=4"
          />
          <img
            className="avatar-img shadow"
            src="https://miro.medium.com/max/1000/1*tv9pIQPhwumDnYBfCoapYg.jpeg"
          />
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522flex-row%2522%253E%250A%2520%2520%253Cimg%2520class%253D%2522avatar-img%2520shadow%2522%2520src%253D%2522...%2522%253E%250A%2520%2520%253Cimg%2520class%253D%2522avatar-img%2520shadow%2522%2520src%253D%2522...%2522%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <div className="component-sub">
        <h3>Letter Avatars</h3>
        <div className="flex-row justify-space-evenly  component-box">
          <div className="avatar avatar-grey shadow">H</div>
          <div className="avatar avatar-orange shadow">M</div>
          <div className="avatar avatar-purple shadow">T</div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522flex-row%2520%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520avatar-grey%2520shadow%2522%253EH%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520avatar-orange%2520shadow%2522%253EMS%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520avatar-purple%2520shadow%2522%253ET%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};
