import { useState } from "react";
import "./styles.css";
var color = "blue";

const emoDatabase = {
  "🙁": "sad",
  "😊": "smiling",
  "😂": "laughing",
  "🥺": "puppy eyes",
  "😳": "shocked",
  "😓": "stressed",
  "😭": "crying;"
};

const emoArr = Object.keys(emoDatabase);

export default function App() {
  const [meaning, inputSetter] = useState("");

  function inputType(event) {
    const userInput = event.target.value;
    var meaning = emoDatabase[userInput];
    if (meaning === undefined) {
      meaning = "We dont have this in our database, try again ";
    }
    inputSetter(meaning);
  }

  function onclickHandler(emoji) {
    var meaning = emoDatabase[emoji];
    inputSetter(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: color }}> Emoji Finder</h1>
      <input placeholder="type here..." onChange={inputType}></input>
      <div>
        <br />
        {meaning} !
      </div>
      <div>
        <h3>Our emoji database</h3>
        {emoArr.map(function (emoji) {
          return (
            <span
              onClick={() => onclickHandler(emoji)}
              style={{
                listStyleType: "none",
                padding: "0.6rem",
                fontSize: "1.5rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
