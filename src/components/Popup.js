import React , {useEffect} from "react";
import { checkWin } from "../helper/Helper";

const Popup = ({ correctLetters, wrongLetters, setplayable, selectedWord,playAgain }) => {
  let finalMessage = "";
  let findlMessageRevelWord = "";
  let playable = true;

  

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "abhinandan! 😃";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "unfortunatly you lose!";
    findlMessageRevelWord = `... the word was: ${selectedWord}`;
    playable = false;
  }
  useEffect(() => {
   setplayable(playable);
 });
  return (
    <div
      className="popup-container" onClick={playAgain}
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage} </h2>
        <h3>{findlMessageRevelWord} </h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
