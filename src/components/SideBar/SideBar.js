export const SideBar = ({ selectTab }) => {
  return (
    <div>
      <div
        style={{
          fontSize: "0.7rem",
          fontWeight: "700",
          opacity: "0.9",
          marginTop: "1.5rem",
          marginLeft: "3rem",
          color: "#023e8a",
          padding: "0.5rem 0rem"
        }}
      >
        GETTING STARTED
      </div>
      <div className="hamMenu-items">
        <div
          onClick={() => {
            selectTab("Installation");
          }}
          className="hamMenu-div"
        >
          Installation
        </div>
      </div>

      <div
        style={{
          fontSize: "0.7rem",
          fontWeight: "700",
          opacity: "0.9",
          marginTop: "1.5rem",
          marginLeft: "3rem",
          color: "#023e8a",
          padding: "0.5rem 0rem"
        }}
      >
        COMPONENTS
      </div>
      <div className="hamMenu-items">
        <div
          onClick={() => {
            selectTab("Avatar");
          }}
          className="hamMenu-div"
        >
          Avatar{" "}
        </div>
        <div
          onClick={() => {
            selectTab("Alert");
          }}
          className="hamMenu-div"
        >
          Alert{" "}
        </div>
        <div
          onClick={() => {
            selectTab("Badge");
          }}
          className="hamMenu-div"
        >
          Badge{" "}
        </div>
        <div
          onClick={() => {
            selectTab("Button");
          }}
          className="hamMenu-div"
        >
          Button{" "}
        </div>
        <div
          onClick={() => {
            selectTab("Card");
          }}
          className="hamMenu-div"
        >
          Card{" "}
        </div>
        <div
          onClick={() => {
            selectTab("Image");
          }}
          className="hamMenu-div"
        >
          Image{" "}
        </div>
        <div
          onClick={() => {
            selectTab("Input");
          }}
          className="hamMenu-div"
        >
          Input{" "}
        </div>
        <div
          onClick={() => {
            selectTab("List");
          }}
          className="hamMenu-div"
        >
          List{" "}
        </div>
        <div
          onClick={() => {
            selectTab("Navigation");
          }}
          className="hamMenu-div"
        >
          Navigation{" "}
        </div>
        <div
          onClick={() => {
            selectTab("Modal");
          }}
          className="hamMenu-div"
        >
          Modal{" "}
        </div>
        <div
          onClick={() => {
            selectTab("Toast");
          }}
          className="hamMenu-div"
        >
          Toast{" "}
        </div>

        <div
          onClick={() => {
            selectTab("Grid");
          }}
          className="hamMenu-div"
        >
          Simplified Grid{" "}
        </div>
        <div
          onClick={() => {
            selectTab("TextUtilities");
          }}
          className="hamMenu-div"
        >
          Text Utilities{" "}
        </div>
      </div>
    </div>
  );
};
