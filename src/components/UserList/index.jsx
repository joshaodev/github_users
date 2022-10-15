import "./UserList.css";

function UserList({ devs }) {
  return (
    <main>
      <h1>Github users</h1>
      <ul>
        {devs.length === 0 && (
          <p className="no-records">Nenhum usuário adicionado!</p>
        )}
        {devs.map((dev) => (
          <li key={dev.id} className="user-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name} />
              <div className="user-info">
                <h2>{dev.name}</h2>
                <span>{dev.techs.join(", ")}</span>
              </div>
            </header>
            <p>{dev.bio}</p>
            <a href={dev.html_url} target="_blank">
              Acessar o perfil no Github
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default UserList;
