document.getElementById("player-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("player-name").value;
    const role = document.getElementById("player-role").value;
    const image = document.getElementById("player-image").value;

    const players = JSON.parse(localStorage.getItem("players")) || [];
    players.push({ name, role, image });
    localStorage.setItem("players", JSON.stringify(players));

    alert("Player added successfully!");
    this.reset();
});
