import "./styles.css";
import "./list.scss";
import "./NavBar";
import NavBar from "./NavBar";
import List from "./List";

export default function App() {
  const names = ["Jimmy", "Rashad", "Morsy", "M. Ali"];
  return (
    <div className="App">
      <NavBar />
      <List names={names} />
    </div>
  );
}
