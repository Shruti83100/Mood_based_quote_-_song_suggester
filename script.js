const moodData = {
  happy: {
    quote: "Happiness is not by chance, but by choice.",
    audio: "apt.mp3",
    color: "#ffeb3b"
  },
  sad: {
    quote: "Tears come from the heart and not from the brain.",
    audio: "sad.mp3",
    color: "#90caf9"
  },
  motivated: {
    quote: "Push yourself, because no one else is going to do it for you.",
    audio: "motivation.mp3",
    color: "#ff8a65"
  },
  calm: {
    quote: "Peace begins with a smile.",
    audio: "calm.mp3",
    color: "#b2dfdb"
  }
};

function showMood(mood) {
  const quoteEl = document.getElementById("quote");
  const audioEl = document.getElementById("player");
  const moodInfo = moodData[mood];

  quoteEl.textContent = moodInfo.quote;
  audioEl.src = moodInfo.audio;
  document.body.style.backgroundColor = moodInfo.color;

  audioEl.play();
}
