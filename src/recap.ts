const myName = 'Alejandro';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
}

suma(12, 23);

class Persona {
  private age;
  private name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `My Name is ${this.name}, ${this.age}`;
  }
}

const alejandro = new Persona(22, 'Alejandro');
