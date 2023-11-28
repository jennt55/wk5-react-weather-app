import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App container">
      <Weather defaultCity="London" />
      <footer>
        <a
          href="https://github.com/jennt55/wk5-react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open Source Code on Github
        </a>{" "}
        by Jenn Taft
      </footer>
    </div>
  );
}
