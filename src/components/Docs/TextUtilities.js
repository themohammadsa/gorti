export const TextUtilities = () => {
  return (
    <div className="component">
      <h1>Text Utilities</h1>
      <p className="component-text">
        In most projects you might find yourself repeating specific text
        properties (font size, font weight, line height) or layer properties
        (bg, color, shadow). This can be painful as your project grows in size.
        Text Utilities solves this.
      </p>

      <div className="component-sub">
        <h3>Sizes</h3>
        <div class="flex-column justify-space-evenly component-box">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <div className="small-text"> This is a small text.</div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=htmlmixed&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Ch1%253EHeading%25201%253C%252Fh1%253E%250A%253Ch2%253EHeading%25202%253C%252Fh2%253E%250A%253Ch3%253EHeading%25203%253C%252Fh3%253E%250A%253Ch4%253EHeading%25204%253C%252Fh4%253E%250A%253Cdiv%2520className%253D%2522small-text%2522%253E%2520This%2520is%2520a%2520small%2520text.%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <div className="component-sub">
        <h3>Font Weight</h3>
        <div class="component-box">
          <p className="bold-text"> Bold Text.</p>
          <p className="light-bold-text"> Light Bold Text.</p>
          <p className="light-text"> Light Text.</p>

          <p className="grey-text"> Grey Text.</p>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=htmlmixed&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cp%2520className%253D%2522bold-text%2522%253E%2520Bold%2520Text.%253C%252Fp%253E%250A%253Cp%2520className%253D%2522light-bold-text%2522%253E%2520Light%2520Bold%2520Text.%253C%252Fp%253E%250A%253Cp%2520className%253D%2522light-text%2522%253E%2520Light%2520Text.%253C%252Fp%253E%250A%253Cp%2520className%253D%2522grey-text%2522%253E%2520Grey%2520Text.%253C%252Fp%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <div className="component-sub">
        <h3>Text Alignment</h3>
        <div class="component-box">
          <p className="text-left">Aligned text towards the left. </p>
          <p className="text-center">Aligned text towards the left. </p>
          <p className="text-right">Aligned text towards the right. </p>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=htmlmixed&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cp%2520className%253D%2522text-left%2522%253EAligned%2520text%2520towards%2520the%2520left.%2520%253C%252Fp%253E%250A%253Cp%2520className%253D%2522text-center%2522%253EAligned%2520text%2520towards%2520the%2520left.%2520%253C%252Fp%253E%250A%253Cp%2520className%253D%2522text-right%2522%253EAligned%2520text%2520towards%2520the%2520right.%2520%253C%252Fp%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};
