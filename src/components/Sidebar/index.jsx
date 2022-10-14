import "./Sidebar.css";

function Sidebar() {
  return (
    <aside>
      <form>
        <span>Cadastrar</span>
        <div className="input-block">
          <label htmlFor="github_user">Usuário do Github</label>
          <input type="text" name="github_user" id="github_user" />
        </div>
        <div className="input-block">
          <label htmlFor="tecnologies">Tecnologias</label>
          <input type="text" name="tecnologies" id="tecnologies" />
        </div>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input type="text" name="latitude" id="latitude" />
          </div>
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input type="text" name="longitude" id="longitude" />
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
