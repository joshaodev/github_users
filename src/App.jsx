import { useEffect, useState } from "react";
//import api from "./services/api";
import api from "./services/api";

import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [devs, setDevs] = useState([]);

  /** Add Devs to API */
  const addDev = async (e, dev) => {
    e.preventDefault();

    /*const response = await api.post("/devs", {
      username: dev.username,
      thechs: dev.techs,
      latitude: dev.latitude,
      longitude: dev.longitude,
    });*/

    console.log("Dev adicionado");
  };

  /** Get Devs from API */
  useEffect(() => {
    const loadDevs = async () => {
      const response = await api.get("/devs");
      setDevs(response.data);
    };

    loadDevs();
  }, []);

  return (
    <div className="app">
      <div>
        <Sidebar addDev={addDev} />
        <UserList devs={devs} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
