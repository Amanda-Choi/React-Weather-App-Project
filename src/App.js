import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hawaii" />
        <footer>
          <a
            href="https://github.com/Amanda-Choi/React-Weather-App-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          {""} by {""}
          <a href="#" target="_blank">
            Amanda Choi
          </a>
        </footer>
      </div>
    </div>
  );
}
