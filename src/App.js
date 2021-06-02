import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Khon Kaen" />
        <footer>
          The project is coded by Zoe Tucker 👩‍💻 <br />
          and is open-source on{" "}
          <a
            href="https://github.com/zoetucker/hello-weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://serene-poitras-151a5b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
