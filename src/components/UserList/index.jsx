import { useEffect, useState } from "react";
//import api from "../../services/api";

import react_logo from "../../assets/react.svg";
import "./UserList.css";

function UserList({ devs }) {
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
          <p>
            Dev Web Junior Full-stack, mais inclinado para o front-end, gosto de
            aprender e sou fã de desafios.
          </p>
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
          <p>
            Dev Web Junior Full-stack, mais inclinado para o front-end, gosto de
            aprender e sou fã de desafios.
          </p>
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
          <p>
            Dev Web Junior Full-stack, mais inclinado para o front-end, gosto de
            aprender e sou fã de desafios.
          </p>
          <a href="#">Acessar o perfil no Github</a>
        </li>
        <li className="user-item">
          <header>
            <img
              src="https://avatars.githubusercontent.com/u/105153983?v=4"
              alt="React Logo"
            />
            <div className="user-info">
              <h2>React js</h2>
              <span>Reactjs, React Native, Nodejs</span>
            </div>
          </header>
          <p>
            Dev Web Junior Full-stack, mais inclinado para o front-end, gosto de
            aprender e sou fã de desafios.
          </p>
          <a href="#">Acessar o perfil no Github</a>
        </li>
        {/*}
      
        {devs.map((dev) => (
          <li key={dev.id} className="user-item">
            <header>
              <img src={react_logo} alt="React Logo" />
              <div className="user-info">
                <h2>React js</h2>
                <span>{dev.techs}</span>
              </div>
            </header>
            <p>
              Dev Web Junior Full-stack, mais inclinado para o front-end, gosto
              de aprender e sou fã de desafios.
            </p>
            <a href="#">Acessar o perfil no Github</a>
          </li>
        ))}

        {*/}
      </ul>
    </main>
  );
}

export default UserList;
