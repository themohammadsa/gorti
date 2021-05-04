export const Installation = () => {
  return (
    <div className="component">
      <h1>Getting Started</h1>
      <p className="component-text">
        Welcome to Gorti. You can add the required files to your project by
        following the process below.
      </p>

      <div className="component-sub">
        <h3>Download</h3>
        <p className="component-text">
          Please click the button below to download the necessary CSS files.
        </p>
        <a
          download
          href="https://raw.githubusercontent.com/themohammadsa/gorti/development/styles.css"
          style={{
            textDecoration: "none"
          }}
        >
          <button
            style={{ padding: "0.75rem 2rem" }}
            className="button button-primary shadow "
          >
            {" "}
            Download{" "}
          </button>
        </a>
      </div>

      <div className="component-sub">
        <h3>Installation</h3>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=htmlmixed&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fgorti.netlify.app%252Fstyles.css%2522%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <div className="component-sub">
        <h3>Starter Template</h3>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=htmlmixed&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Chtml%2520lang%253D%2522en%2522%253E%250A%2520%2520%253Chead%253E%250A%2520%2520%2520%2520%253C%21--%2520Required%2520meta%2520tags%2520--%253E%250A%2520%2520%2520%2520%253Cmeta%2520charset%253D%2522utf-8%2522%253E%250A%2520%2520%2520%2520%253Cmeta%2520name%253D%2522viewport%2522%2520content%253D%2522width%253Ddevice-width%252C%2520initial-scale%253D1%2522%253E%250A%250A%2520%2520%2520%2520%253C%21--%2520Gorti%2520CSS%2520--%253E%250A%2520%2520%2520%2520%253Clink%2520href%253D%2522https%253A%252F%252Fgorti.netlify.app%252Fstyles.css%2522%2520rel%253D%2522stylesheet%2522%253E%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520%253Ctitle%253EHello%252C%2520world%21%253C%252Ftitle%253E%250A%2520%2520%253C%252Fhead%253E%250A%2520%2520%253Cbody%253E%250A%2520%2520%2520%2520%253Ch1%253EHello%252C%2520world%21%253C%252Fh1%253E%250A%2520%2520%253C%252Fbody%253E%250A%253C%252Fhtml%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};
