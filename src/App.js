import logo from "./conv-commits.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learn about conventional commits.</p>
        <ul style={{ textAlign: "left" }}>
          <li>
            <a
              className="App-link"
              href="https://www.conventionalcommits.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              About conventional commits
            </a>
          </li>
          <li>
            <a
              className="App-link"
              href="https://www.conventionalcommits.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Angular Conventional commits
            </a>
          </li>
          <li>
            <a
              className="App-link"
              href="https://www.conventionalcommits.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conventional commits cheat cheat
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
