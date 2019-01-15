export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.food = 100;
    this.sleep = 100;
    this.play = 100;
    this.overTime = setInterval(() => {
      this.food--;
      this.sleep--;
      this.play--;
    }, 2000)
  }

  feed() {
    this.food = 100;
  }


}
