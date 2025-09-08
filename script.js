// Grab all audio elements
const songs = [
  { btn: document.getElementById("playBtn1"), audio: document.getElementById("music") },
  { btn: document.getElementById("playBtn2"), audio: document.getElementById("music2") },
  { btn: document.getElementById("playBtn3"), audio: document.getElementById("music3") }
];

// Function to stop all songs
function stopAll() {
  songs.forEach(({ btn, audio }) => {
    audio.pause();
    audio.currentTime = 0; // reset to start
    btn.textContent = btn.id === "playBtn1" ? "Play 1" :
                      btn.id === "playBtn2" ? "Play 2" : "Play 3";
  });
}

// Add click event for each button
songs.forEach(({ btn, audio }) => {
  btn.addEventListener("click", () => {
    if (audio.paused) {
      stopAll();             // stop any song that’s playing
      audio.play();          // play the chosen one
      btn.textContent = "Pause";
    } else {
      audio.pause();
      btn.textContent = btn.textContent.includes("1") ? "Play 1" :
                        btn.textContent.includes("2") ? "Play 2" : "Play 3";
    }
  });
});

// === Feedback Form ===
const form = document.getElementById("feedbackForm");
const feedback = document.getElementById("feedback");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (feedback.value.trim() === "") {
    msg.style.color = "red";
    msg.textContent = "⚠️ Please write something first!";
  } else {
    msg.style.color = "green";
    msg.textContent = "✅ Thanks for your feedback!";
    feedback.value = "";
  }
});
