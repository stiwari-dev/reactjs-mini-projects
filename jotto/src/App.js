import "./App.css";
import Congrats from "./components/Congrats/Congrats";
import GuessedWords from "./components/GuessedWords/GuessedWords";

function App() {
  return (
    <div className="container">
      <h3>Jotto</h3>
      <Congrats success />
      <GuessedWords
        guessedWords={[
          { guessedWord: "Train", matchCount: 3 },
          { guessedWord: "Agile", matchCount: 1 },
        ]}
      />
    </div>
  );
}

export default App;
