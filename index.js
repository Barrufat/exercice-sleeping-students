const firstStudent = {
  name: "Anacleto",
  surname: "Perez",
  sleptHours: 0,
  grade: 1,
  greeting: function () {
    console.log(`Me llamo ${this.name} y he dormido ${this.sleptHours} horas.`);
  },
  sleep: function (newHours) {
    this.sleptHours = newHours;
    return this.sleptHours;
  },
  hasSlept: function () {
    student.sleptHours >= 2;
  },
};

const secondStudent = {
  name: "Marisol",
  surname: "La grande",
  sleptHours: 5,
  grade: 7,
  greeting: function () {
    console.log(`Me llamo ${this.name} y he dormido ${this.sleptHours} horas.`);
  },
  sleep: function (newHours) {
    if (newHours >= 0) {
      this.sleptHours = newHours;
      return this.sleptHours;
    }
  },
  hasSlept: function () {
    student.sleptHours >= 2;
  },
};

firstStudent.greeting();
secondStudent.greeting();

console.log(firstStudent.sleep(4));
console.log(secondStudent.sleep(2));
