import React, { useState } from "react";

const JokeApp = () => {
  const [jokeText, setJokeText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch a random joke
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
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        fontFamily: "Verdana, sans-serif",
      }}
    >
      <h1>Joke of the Day</h1>
      <button
        onClick={getRandomJoke}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "25px",
        }}
      >
        Get A New Joke
      </button>
      <div
        style={{
          marginTop: "20px",
          fontSize: "20px",
          color: isLoading ? "#007bff" : "#333",
        }}
      >
        {isLoading ? "Fetching your joke..." : jokeText}
      </div>
    </div>
  );
};

export default JokeApp;
