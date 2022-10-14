import "./App.css";
import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="app">
      <div>
        <Sidebar />
        <UserList />
      </div>
      <footer>&copy; 2022 | Made by joshtag</footer>
    </div>
  );
}

export default App;
