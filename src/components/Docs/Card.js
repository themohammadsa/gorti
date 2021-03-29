export const Card = () => {
  return (
    <div className="component">
      <h1>Card</h1>
      <p className="component-text">
        A card is a flexible and extensible content container. It includes
        options for headers and footers, a wide variety of content, contextual
        background colors, and powerful display options.
      </p>

      <div className="component-sub">
        <h3>Card with Text</h3>
        <div class="flex-row justify-space-evenly component-box">
          <div class="card">
            <p class="card-text pad1rem">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate ratione rerum at quis velit esse quasi exercitationem
              maiores expedita deleniti illum excepturi, officia molestias,
              voluptas vero praesentium quae sequi perspiciatis.
            </p>
          </div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card%2522%253E%250A%2520%2520%253Cp%2520class%253D%2522card-text%2520pad1rem%2522%253E%250A%2520%2520%2520%2520%2520....%250A%2520%2520%253C%252Fp%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <div className="component-sub">
        <h3>Card with Dismiss Button</h3>
        <div class="flex-row justify-space-evenly  component-box">
          <div class="card pad1rem">
            <button class="button-dismiss">×</button>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate ratione rerum at quis velit esse quasi exercitationem
              maiores expedita deleniti illum excepturi, officia molestias,
              voluptas vero praesentium quae sequi perspiciatis.
            </p>
          </div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card%2520pad1rem%2522%253E%250A%2520%2520%253Cbutton%2520class%253D%2522button-dismiss%2522%253E%2520%25C3%2597%2520%253C%252Fbutton%253E%250A%2520%2520%253Cp%2520class%253D%2522card-text%2522%253E%2520%2520....%2520%253C%252Fp%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <div className="component-sub">
        <h3>Vertical Card</h3>
        <div class="flex-row justify-space-evenly  component-box">
          <div class="card-vertical flex-column">
            <img
              class="card-image"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt=""
            />
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate ratione rerum at quis velit esse.
            </p>
          </div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card-vertical%2520flex-column%2522%253E%250A%2520%2520%253Cimg%2520class%253D%2522card-image%2522%2520src%253D%2522...%2522%2520alt%253D%2522%2522%253E%250A%2520%2520%253Cp%2520class%253D%2522card-text%2522%253E%2520.....%2520%2520%253C%252Fp%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <div className="component-sub">
        <h3>Horizontal Card</h3>
        <div class="flex-row justify-space-evenly  component-box">
          <div class="card-horizontal flex-row">
            <img
              class="card-image"
              src="https://www.w3schools.com/howto/img_avatar2.png"
              alt=""
            />
            <p class="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card-horizontal%2520flex-row%2522%253E%250A%2520%2520%253Cimg%2520class%253D%2522card-image%2522%2520src%253D%2522...%2522%2520alt%253D%2522%2522%253E%250A%2520%2520%253Cp%2520class%253D%2522card-text%2522%253E%2520...%2520%253C%252Fp%253E%250A%253C%252Fdiv%253E"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>

      </div>
    </div>
  );
};
