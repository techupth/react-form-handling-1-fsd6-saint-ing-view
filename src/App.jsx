import "./App.css";
import { useState } from "react";

function App() {
  const [greetingInput, setGreetingInput] = useState("");
  const [greeting, setGreeting] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={greetingInput}
          onChange={(event) => {
            setGreetingInput(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGreeting(greetingInput);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
