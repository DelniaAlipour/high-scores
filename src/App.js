import allCountryScores from "./scores";
import "./App.css";
import React from "react";

const HighScoreTable = ({ country }) => {
  const sortedScores = country.scores.sort((a, b) => b.s - a.s);
  return (
    <div className="HighScoreTable">
      <h3>HIGH SCORES: {country.name}</h3>
      <table>
        <tbody>
          {sortedScores.map((score, index) => (
            <tr key={index}>
              <td>{score.n}</td>
              <td>{score.s}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h2>High Scores Per Country</h2>
      {allCountryScores.map((country, index) => (
        <HighScoreTable key={index} country={country} />
      ))}
    </div>
  );
};

export default App;
