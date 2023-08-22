class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

class FullTimeEmployee extends Employee {
  constructor() {
    super(name, position);
  }

  addWorkTime() {
    super(name, position);
    this.workTime;
    this.totalSalary;
  }

  calculateTotalSalary() {
    if (this.workTime > 6) {
      this.totalSalary = this.workTime * 75000;
    } else {
      this.totalSalary = this.workTime * 100000;
    }
  }
}

class PartTimeEmploee extends Employee {
  addWorkTime() {
    super(name, position);
    this.workTime;
  }

  calculateTotalSalary() {
    if (this.workTime > 6) {
      this.totalSalary = this.workTime * 50000;
    } else {
      this.totalSalary = this.workTime * 30000;
    }
  }
}
