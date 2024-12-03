import React, { useState } from "react";
import "./App.css"; 

const JokeApp = () => {
  const [jokeText, setJokeText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getRandomJoke = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const jokeData = await response.json();
      setJokeText(`${jokeData.setup} - ${jokeData.punchline}`);
    } catch (err) {
      setJokeText("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="joke-container">
      <h1>Joke of the Day</h1>
      <button onClick={getRandomJoke} className="joke-button">
        Get A New Joke
      </button>
      <div className={`joke-text ${isLoading ? "loading" : ""}`}>
        {isLoading ? "Fetching your joke..." : jokeText}
      </div>
    </div>
  );
};

export default JokeApp;
