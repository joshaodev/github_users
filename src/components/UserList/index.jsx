import react_logo from "../../assets/react.svg";
import "./UserList.css";

function UserList() {
  return (
    <main>
      <h1>Github users</h1>
      <ul>
        <li className="user-item">
          <header>
            <img src={react_logo} alt="React Logo" />
            <div className="user-info">
              <h2>React js</h2>
              <span>Reactjs, React Native, Nodejs</span>
            </div>
          </header>
          <p>user bio</p>
          <a href="#">Acessar o perfil no Github</a>
        </li>
        <li className="user-item">
          <header>
            <img src={react_logo} alt="React Logo" />
            <div className="user-info">
              <h2>React js</h2>
              <span>Reactjs, React Native, Nodejs</span>
            </div>
          </header>
          <p>user bio</p>
          <a href="#">Acessar o perfil no Github</a>
        </li>
        <li className="user-item">
          <header>
            <img src={react_logo} alt="React Logo" />
            <div className="user-info">
              <h2>React js</h2>
              <span>Reactjs, React Native, Nodejs</span>
            </div>
          </header>
          <p>user bio</p>
          <a href="#">Acessar o perfil no Github</a>
        </li>
        <li className="user-item">
          <header>
            <img src={react_logo} alt="React Logo" />
            <div className="user-info">
              <h2>React js</h2>
              <span>Reactjs, React Native, Nodejs</span>
            </div>
          </header>
          <p>user bio</p>
          <a href="#">Acessar o perfil no Github</a>
        </li>
      </ul>
    </main>
  );
}

export default UserList;
