const playerData = {
  "virat kohli": {
    runs: 12300,
    matches: 275,
    average: 57.4
  },
  "rohit sharma": {
    runs: 9800,
    matches: 240,
    average: 48.2
  },
  "ms dhoni": {
    runs: 10500,
    matches: 300,
    average: 50.3
  }
};

function showStats() {
  const input = document.getElementById("playerInput").value.toLowerCase().trim();
  const statsDiv = document.getElementById("stats");

  if (playerData[input]) {
    const player = playerData[input];
    statsDiv.innerHTML = `
      <h2>${input.toUpperCase()}</h2>
      <p><strong>Runs:</strong> ${player.runs}</p>
      <p><strong>Matches:</strong> ${player.matches}</p>
      <p><strong>Average:</strong> ${player.average}</p>
    `;
  } else {
    statsDiv.innerHTML = `<p>Player not found. Try again!</p>`;
  }
}
