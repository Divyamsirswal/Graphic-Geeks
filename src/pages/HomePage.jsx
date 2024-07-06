import Navbar from "../components/Navbar";
import "../index.scss";
import Cursor from "../components/cursor";
import { useState } from "react";
import Welcome from "../components/Welcome";
import Coordinators from "../components/Coordinators";
import CoreTeam from "../components/CoreTeam";
import TeamList from "../components/TeamList";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import DiscoverFuture from "../components/DiscoverFuture";

const HomePage = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Cursor hover={hover} zIndex={9999} />
      <Navbar setHover={setHover} />
      <DiscoverFuture setHover={setHover} />
      <Welcome setHover={setHover} />
      <Coordinators />
      <CoreTeam />
      <TeamList setHover={setHover} />
      <Aboutus />
      <Footer />
    </div>
  );
};

export default HomePage;
