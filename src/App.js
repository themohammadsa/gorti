import "./styles.css";
import { useState } from "react";
import {
  Avatar,
  Alert,
  Badge,
  Button,
  Card,
  Image,
  Input,
  List,
  Grid,
  Toast,
  TextUtilities,
  Modal,
  Navigation,
  Installation
} from "./components/Docs";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { HomePage } from "./components/HomePage/HomePage";


export default function App() {
  const componentObject = {
    Avatar: <Avatar />,
    Alert: <Alert />,
    Badge: <Badge />,
    Button: <Button />,
    Card: <Card />,
    Image: <Image />,
    Input: <Input />,
    List: <List />,
    Navigation: <Navigation />,
    Modal: <Modal />,
    Grid: <Grid />,
    Toast: <Toast />,
    TextUtilities: <TextUtilities />,
    Installation: <Installation />
  };

  const [tab, setTab] = useState(<Installation />);
  const [displayHomePage, setDisplayHomePage] = useState("");

  const renderSelectedTab = (component) => {
    setTab(componentObject[component]);
    component === "Installation" ? setDisplayHomePage("hide-homepage") : "";
  };

  return (
    <div className="App">
      <Header selectedTabToHeader={renderSelectedTab} />
      <div className={displayHomePage}>
        <HomePage selectedTabToHeader={renderSelectedTab} />
      </div>
      <div className="side-bar">
        <SideBar selectTab={renderSelectedTab} />
      </div>
      <div className="content">
        {tab}
        <Footer />
      </div>

    </div>
  );
}
