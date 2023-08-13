class Employee {
  constructor(name, workTime, normalTime = 6) {
    this.name = name;
    this.workTime = workTime;
    this.normalTime = normalTime;
  }

  addWorkTime(add) {
    if (add > 0) {
      this.workTime = this.workTime + add;
      console.log(this.workTime);
    }
  }
}

class FulltimeEMployee extends Employee {
  constructor(name, workTime, normalTime) {
    super(name, workTime, normalTime);
  }

  salary() {
    super.addWorkTime();
    let salaryNormal = 100000;
    let salaryOverTime = 75000;
    if (this.workTime > this.normalTime) {
      let totalSalary =
        this.normalTime * salaryNormal +
        (this.workTime - this.normalTime) * salaryOverTime;
      return `Total Gaji ${this.name} sebagai pekerja Full Time adalahsebesar Rp.${totalSalary}`;
    }
  }
}

class ParttimeEmployee extends Employee {
  constructor(name, workTime, normalTime) {
    super(name, workTime, normalTime);
  }

  salary() {
    super.addWorkTime();
    let salaryNormal = 50000;
    let salaryOverTime = 30000;
    if (this.workTime > this.normalTime) {
      let totalSalary =
        this.normalTime * salaryNormal +
        (this.workTime - this.normalTime) * salaryOverTime;
      return `Total Gaji ${this.name} sebagai pekerja Part Time adalah sebesar Rp.${totalSalary}`;
    }
  }
}

const rian = new FulltimeEMployee("Rian", 10);

const jihan = new ParttimeEmployee("Jihan", 20);

console.log(rian.salary());
console.log(rian.addWorkTime(9));

console.log(jihan.salary());

// Game Shooting=shoting

class Shooting {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    return Math.random();
  }

  start() {}
}

class Player {
  constructor() {
    this.name = name;
    this.health = this.health;
  }
}
