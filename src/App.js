import React, { useEffect, useState, createContext } from "react";
import NavBar from "./Main/components/NavBar";
import { Routes, Route, Link } from "react-router-dom";
import UpcomingRides from "./Main/screens/UpcomingRides";
import NearestRides from "./Main/screens/NearestRides";
import PastRides from "./Main/screens/PastRides";
import Navlinks from "./Main/screens/Navlinks";
import axios from "axios";

export const DataContext = createContext();

function App() {
  const [AllData, setAllData] = useState([]);
  useEffect(() => {
    const data = async () => {
      const MapData = await axios.get("https://assessment.api.vweb.app/rides");
      setAllData(MapData.data);
    };
    data();
  }, []);

  return (
    <>
      <DataContext.Provider value={AllData}>
        <NavBar />
        <Navlinks />
        <Routes>
          <Route path="/" element={<NearestRides />} />
          <Route path="upcomingrides" element={<UpcomingRides />} />
          <Route path="pastrides" element={<PastRides />} />
        </Routes>
      </DataContext.Provider>
    </>
  );
}

export default App;
