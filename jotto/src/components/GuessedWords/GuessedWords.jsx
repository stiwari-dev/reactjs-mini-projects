import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-test="guessed-words-component">
      {guessedWords.length ? (
        <div data-test="guessed-words">
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>Guessed Word</th>
                <th>Match Count</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((wordObj, index) => (
                <tr key={index} data-test="guessed-word">
                  <th>{wordObj.guessedWord}</th>
                  <th>{wordObj.matchCount}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 data-test="guess-words-instruction">
          No guessed words. Try to guess a word!
        </h3>
      )}
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      matchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
