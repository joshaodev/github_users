import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api, githubApi } from "../../services/api";

import "./Sidebar.css";

function Sidebar({ addDev }) {
  const [devs, setDevs] = useState([]);
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");

  const convertTechs = (techsText) => {
    const techs = techsText.split(",");
    console.log(techs);
    setTechs(techs);
    return techs.map((tech) => tech.trim());
  };

  /** Set username and techs fields */
  const setFields = () => {
    setGithubUsername("");
    setTechs("");
  };

  /** Search github user by username */
  const searchGithubUser = async (username) => {
    try {
      const response = await githubApi.get(`/${username}`);
      console.log(response.data);
      if (devs.find(({ github_id }) => github_id === response.data.id)) {
        toast.warn("Este usuário já foi cadastrado!");
      } else {
        const dev = {
          github_id: response.data.id,
          avatar_url: response.data.avatar_url,
          name: response.data.name,
          bio: response.data.bio,
          techs: convertTechs(techs),
          html_url: response.data.html_url,
        };

        addDev(dev);

        setFields();
      }
    } catch (error) {
      if (error.response.status === 404) {
        toast.error("Este usuário não existe no Github");
      } else {
        toast.error("Erro! Problemas de requesição!");
      }
    }
  };

  /** Add Dev on submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    searchGithubUser(github_username);
  };

  useEffect(() => {
    const loadDevs = async () => {
      const response = await api.get("/devs");
      setDevs(response.data);
    };

    loadDevs();
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
            placeholder="Github username"
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
            onChange={(e) => setTechs(e.target.value)}
            value={techs}
          />
        </div>
        <button type="submit" className="btn-submit">
          Salvar
        </button>
      </form>
    </aside>
  );
}

export default Sidebar;
