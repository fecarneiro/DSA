class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increaseScore(amount) {
    this.score += amount;
  }
  toString() {
    return `[${this.data}]->${this.next} `;
  }
}

const players = [];
players.push(new Player('felipe', 100));
players.push(new Player('olavo', 200));

players.forEach((player) => {
  player.increaseScore(10);
});

console.table(players);
console.dir(players);
console.log(players);
console.log(JSON.stringify(players, null, 2));
