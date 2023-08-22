class Shooting {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const items = ["health", "power"];
    const random = Math.ceil(Math.random() * 1);
    if (items[random] === "health") {
      return {
        health: Math.ceil(Math.random() * 9),
        power: 0,
      };
    } else {
      return {
        power: Math.ceil(Math.random() * 9),
        health: 0,
      };
    }
  }

  start() {
    isFinish = false;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  hit(power) {}

  useItem(item) {}

  showStatus() {}
}
