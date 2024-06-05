import "./App.css";
import { useState } from "react";

function App() {
  const [greetingInput, setGreetingInput] = useState("");
  const [greetingShow, setGreetingShow] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{greetingShow}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(e) => {
            setGreetingInput(e.target.value);
          }}
          value={greetingInput}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGreetingShow(greetingInput);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
