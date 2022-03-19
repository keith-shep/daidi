import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

axios.get("http://localhost:3000/").then((response) => {
  // alert(response.stringify());
  alert(JSON.stringify(response.data));
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        hi
      </header>
    </div>
  );
}

export default App;
