export const Alert = () => {
  return (
    <div className="component">
      <h1>Alerts</h1>
      <p className="component-text">
        Alerts are used to communicate a state that affects a system, feature or
        page.
      </p>

      <div className="component-sub component-box">
        <div class="alert alert-error shadow">
          This is an error alert — check it out!
        </div>
        <div class="alert alert-warning shadow">
          This is an warning alert — check it out!
        </div>
        <div class="alert alert-info shadow">
          This is an info alert — check it out!
        </div>
        <div class="alert alert-success shadow">
          This is an success alert — check it out!
        </div>
      </div>
      <iframe
        className="component-iframe"
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520class%253D%2522alert%2520alert-error%2520shadow%2522%253E%250A%2520%2520%2520%2520This%2520is%2520an%2520error%2520alert%2520%25E2%2580%2594%2520check%2520it%2520out%21%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522alert%2520alert-warning%2520shadow%2522%253E%250A%2520%2520%2520%2520This%2520is%2520an%2520warning%2520alert%2520%25E2%2580%2594%2520check%2520it%2520out%21%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522alert%2520alert-info%2520shadow%2522%253E%250A%2520%2520%2520%2520This%2520is%2520an%2520info%2520alert%2520%25E2%2580%2594%2520check%2520it%2520out%21%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522alert%2520alert-success%2520shadow%2522%253E%250A%2520%2520%2520%2520This%2520is%2520an%2520success%2520alert%2520%25E2%2580%2594%2520check%2520it%2520out%21%250A%253C%252Fdiv%253E"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};
