import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState();
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(event) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    // IMPERATIVE CODE - NOT A THING IN REACT
    // playerName.current.value = "";  
    // REACT is all about DECLARITIVE CODE
    // specifying what result we're expecting from our code.
    
    // console.log(playerName.current.value);
    // setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
