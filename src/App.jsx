import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import Events from "./pages/EventsPage";
import JoinusPage from "./pages/JoinusPage";
import ResourcesPage from "./pages/ResourcePage";
import ContactusPage from "./pages/ContactusPage";
import Upcoming from "./components/Upcoming";
import Ongoing from "./components/Ongoing";
import Past from "./components/Past";
import Technical from "./components/Technical";
import Marketing from "./components/Marketing";
import Operation from "./components/Operation";
import Working from "./components/Working";
import Design from "./components/Design";
import Editorial from "./components/Editorial";
import ContentCreation from "./components/ContentCreation";
import Treasurer from "./components/Treasurer";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/upcoming" element={<Upcoming />} />
        <Route path="/events/ongoing" element={<Ongoing />} />
        <Route path="/events/past" element={<Past />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/operation" element={<Operation />} />
        <Route path="/working" element={<Working />} />
        <Route path="/designing" element={<Design />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/content-creation" element={<ContentCreation />} />
        <Route path="/treasurer" element={<Treasurer />} />
        <Route path="/joinus" element={<JoinusPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contactus" element={<ContactusPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
