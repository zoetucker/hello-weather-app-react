import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Hello Weather</h1>

        <footer>
          The project is coded by Zoe Tucker <br />
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
            href="https://sad-northcutt-fdc307.netlify.app/"
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
