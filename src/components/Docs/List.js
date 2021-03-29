export const List = () => {
  return (
    <div className="component">
      <h1>Lists</h1>
      <p className="component-text">
        List groups are a flexible and powerful component for displaying a
        series of content. Modify and extend them to support just about any
        content within.
      </p>

      <div className="component-sub">
        <h3>Spaced List</h3>
        <div class="flex-row justify-space-evenly component-box">
          <ul class="list-group">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
        </div>

        <iframe
          className="component-iframe"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cul%2520class%253D%2522list-group%2522%253E%250A%2520%2520%253Cli%2520class%253D%2522list-group-item%2522%253EAn%2520item%253C%252Fli%253E%250A%2520%2520%253Cli%2520class%253D%2522list-group-item%2522%253EA%2520second%2520item%253C%252Fli%253E%250A%2520%2520%253Cli%2520class%253D%2522list-group-item%2522%253EA%2520third%2520item%253C%252Fli%253E%250A%253C%252Ful%253E%250A"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <div className="component-sub">
        <h3>Notification Lists </h3>
        <div class="flex-row justify-space-evenly  component-box">
          <div class="example">
            <div class="list-group notifications">
              <a href="#" class="list-group-item notifications">
                <div class="flex-row justify-space-between">
                  <h3 class="mb-25">Heading</h3>
                  <small class="notification-small">3 days ago</small>
                </div>
                <p class="mb-25">Some placeholder content in a paragraph.</p>
                <small class="notification-small">And some small print.</small>
              </a>
              <a href="#" class="list-group-item notifications">
                <div class="flex-row justify-space-between">
                  <h3 class="mb-25">Heading</h3>
                  <small class="notification-small">3 days ago</small>
                </div>
                <p class="mb-25">Some placeholder content in a paragraph.</p>
                <small class="notification-small">And some small print.</small>
              </a>
              <a href="#" class="list-group-item notifications">
                <div class="flex-row justify-space-between">
                  <h3 class="mb-25">Heading</h3>
                  <small class="notification-small">3 days ago</small>
                </div>
                <p class="mb-25">Some placeholder content in a paragraph.</p>
                <small class="notification-small">And some small print.</small>
              </a>
            </div>
          </div>
        </div>

        <iframe
          className="component-iframe hori-iframe "
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=bw&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522example%2522%253E%250A%2520%2520%253Cdiv%2520class%253D%2522list-group%2522%253E%250A%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%2520class%253D%2522list-group-item%2520notifications%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522flex-row%2520justify-space-between%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%2520class%253D%2522mb-25%2522%253EList%2520group%2520item%2520heading%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Csmall%2520class%253D%2522notification-small%2522%253E3%2520days%2520ago%253C%252Fsmall%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522mb-25%2522%253ESome%2520placeholder%2520content%2520in%2520a%2520paragraph.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Csmall%2520class%253D%2522notification-small%2522%253EAnd%2520some%2520small%2520print.%253C%252Fsmall%253E%250A%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%2520class%253D%2522list-group-item%2520notifications%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522flex-row%2520justify-space-between%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%2520class%253D%2522mb-25%2522%253EList%2520group%2520item%2520heading%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Csmall%2520class%253D%2522notification-small%2522%253E3%2520days%2520ago%253C%252Fsmall%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522mb-25%2522%253ESome%2520placeholder%2520content%2520in%2520a%2520paragraph.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Csmall%2520class%253D%2522notification-small%2522%253EAnd%2520some%2520small%2520print.%253C%252Fsmall%253E%250A%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};
