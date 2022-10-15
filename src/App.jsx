import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { api } from "./services/api";

import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";
import Footer from "./components/Footer";

import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [devs, setDevs] = useState([]);

  /** Add Devs to API */
  const addDev = async (dev) => {
    console.log(dev);
    await api.post("/devs", dev);
    toast.success("Dev adicionado com sucesso!");

    /** set dev added, to devs array to show - update list with dev added */
    setDevs([...devs, dev]);
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
      <ToastContainer />
    </div>
  );
}

export default App;
