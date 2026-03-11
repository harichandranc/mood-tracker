import React, { useState } from "react";

function App() {

  const moods = {
    Happy: { emoji: "😊", color: "#FFD93D" },
    Sad: { emoji: "😢", color: "#74C0FC" },
    Angry: { emoji: "😡", color: "#FF6B6B" },
    Calm: { emoji: "😌", color: "#95D5B2" }
  };

  const [mood, setMood] = useState(null);

  const containerStyle = {
    textAlign: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: mood ? moods[mood].color : "#f4f4f4",
    fontFamily: "Segoe UI, sans-serif"
  };

  const titleStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    background: "linear-gradient(90deg,#ff7e5f,#feb47b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  };

  const moodTextStyle = {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#333"
  };

  const buttonStyle = {
    padding: "12px 22px",
    margin: "10px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  };

  return (
    <div style={containerStyle}>

      <h1 style={titleStyle}>Mood Tracker</h1>

      {mood ? (
        <h2 style={moodTextStyle}>
          {moods[mood].emoji} You are feeling {mood}
        </h2>
      ) : (
        <h2 style={moodTextStyle}>Select your mood</h2>
      )}

      <div>
        {Object.keys(moods).map((m) => (
          <button
            key={m}
            style={buttonStyle}
            onClick={() => setMood(m)}
          >
            {moods[m].emoji} {m}
          </button>
        ))}
      </div>

    </div>
  );
}

export default App;
