import { useEffect, useState } from "react";
import { githubApi } from "../../services/api";

import "./Sidebar.css";

function Sidebar({ addDev }) {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleChangeTecnologies = (techsText) => {
    const techs = techsText.split(",");
    console.log(techs);
    setTechs(techs);
  };

  /** Set username and techs fields */
  const setFields = () => {
    setGithubUsername("");
    setTechs("");
  };

  /** Add Dev on submit */
  const handleSubmit = (e) => {
    const dev = {
      username: github_username,
      thechs: techs,
      latitude: latitude,
      longitude: longitude,
    };

    addDev(e, dev);
    setFields();
  };

  /** Set latitude and Longitude */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        console.log(error);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  return (
    <aside>
      <form onSubmit={handleSubmit}>
        <span>Cadastrar</span>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input
            type="text"
            name="github_username"
            id="github_username"
            onChange={(e) => setGithubUsername(e.target.value)}
            value={github_username}
          />
        </div>
        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input
            type="text"
            name="techs"
            id="techs"
            placeholder="Ex: Tech1,Tech2,Tech3,..."
            onChange={(e) => handleChangeTecnologies(e.target.value)}
            value={techs}
          />
        </div>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
              type="number"
              name="latitude"
              id="latitude"
              required
              onChange={(e) => setLatitude(e.target.value)}
              value={latitude}
            />
          </div>
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input
              type="number"
              name="longitude"
              id="longitude"
              required
              onChange={(e) => setLongitude(e.target.value)}
              value={longitude}
            />
          </div>
        </div>
        <button type="submit" className="btn-submit">
          Salvar
        </button>
      </form>
    </aside>
  );
}

export default Sidebar;
