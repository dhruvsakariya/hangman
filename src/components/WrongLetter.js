import React from "react";

const WrongLetter = ({ wrongLetters }) => {
 
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (total, current) =>
              total === null ? [current] : [total, ",", current],
            null
          )}
      </div>
    </div>
  );
};

export default WrongLetter;
