import logo from "./logo.svg";
import "./App.css";
const { isbn10Checksum, isbn13Checksum } = require("isbn-check/src/isbn-check");

//input und Button
<textarea name="ChecktIsbn" id="checkSum"></textarea>;
Button.addEventListener("click", App);

function App() {
  const isbn10Checksum = () => {
    if (isbn10Checksum.length < 10) {
      isbn13Sum.isbn13Checksum();
    }
    if (checkSum == "X") {
      setIsValid(true);
      document.getElementById("checkSum").style.color = "green";
    } else if (checkSum % 11 == 0) {
      setIsValid(true);
      document.getElementById("checkSum").style.color = "green";
    } else {
      setIsValid(false);
      document.getElementById("checkSum").style.color = "red";
    }
  };

  const isbn13Checksum = () => {
    if (checkSum.length < 13) {
      isbn10Sum.isbn10Checksum();
    }
    if (checkSum == "X") {
      setIsValid(true);
      document.getElementById("checkSum").style.color = "green;";
    } else if (checkSum % 14 == 0) {
      setIsValid(true);
      document.getElementById("checkSum").style.color = "green";
    } else {
      setIsValid(false);
      document.getElementById("checkSum").style.color = "red";
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
