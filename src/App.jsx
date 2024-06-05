import "./App.css";
import { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");
  const [textShow, setTextIShow] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{textShow}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setTextInput(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setTextIShow(textInput);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
