export const Navigation = () => {
  return (
    <div className="component">
      <h1>Navigation Bar</h1>
      <p className="component-text">
        A navigation bar is a navigation header that is placed at the top of the
        page.
      </p>

      <div className="component-sub">
        <h3>Simple NavBar</h3>
        <div class="component-box">
          <div className="navigation-bar">
            <ul class="navigation-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=javascript&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522navigation-bar%2522%253E%250A%2520%2520%253Cul%2520class%253D%2522navigation-list%2522%253E%250A%2520%2520%2520%2520%253Cli%253E%250A%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%253EHome%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253Cli%253E%250A%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%253EPage%25201%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%253C%252Ful%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};
