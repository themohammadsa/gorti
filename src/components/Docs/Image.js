export const Image = () => {
  return (
    <div className="component">
      <h1>Image</h1>
      <p className="component-text">
      Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.
      </p>

      <div className="component-sub">
        <h3>Responsive Image</h3>
        <div class="flex-row justify-space-evenly component-box">
        <img class="image-responsive shadow" src="https://dummyimage.com/250x250/c9c9c9/363636" alt="responsive-image" />
        </div>
       
        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cimg%2520class%253D%2522image-responsive%2520shadow%2522%2520src%253D%2522...%2522%2520alt%253D%2522%2522%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <div className="component-sub">
        <h3>Round Image</h3>
        <div class="flex-row justify-space-evenly  component-box">
        <img class="image-round shadow" src="https://dummyimage.com/250x250/c9c9c9/363636" alt="round-image" />
        </div>
       
        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cimg%2520class%253D%2522image-round%2520shadow%2522%2520src%253D%2522...%2522%2520alt%253D%2522%2522%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};
