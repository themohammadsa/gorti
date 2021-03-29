export const Grid = () => {
  console.log("test");
  return (
    <div className="component">
      <h1>Simplified Grid</h1>
      <p className="component-text">
        A primitive useful for grid layouts. Grid is Box with display: grid and
        it comes with helpful style shorthand. It renders a div element.
      </p>

      <div className="component-sub">
        <h3>Two Columns</h3>
        <div class="component-box">
          <div className="grid two-columns">
            <div className="column">1</div>
            <div className="column">2</div>
          </div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522grid%2520two-columns%2522%253E%250A%2520%2520%253Cdiv%2520className%253D%2522column%2522%253E1%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520className%253D%2522column%2522%253E2%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <div className="component-sub">
        <h3>Three Columns</h3>
        <div class="component-box">
          <div className="grid three-columns">
            <div className="column">1</div>
            <div className="column">2</div>
            <div className="column">3</div>
          </div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522grid%2520three-columns%2522%253E%250A%2520%2520%253Cdiv%2520className%253D%2522column%2522%253E1%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520className%253D%2522column%2522%253E2%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520className%253D%2522column%2522%253E3%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};
