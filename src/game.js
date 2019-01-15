export class Game {
  constructor() {
    this.tamagotchis = [];
    this.currentID = 0;
  }

  addTamagotchi(tamagotchi) {
    tamagotchi.id = this.assignID();
    this.tamagotchis.push(tamagotchi);
  }

  assignID() {
    this.currentID += 1;
    return this.currentID;
  }

  findTamagotchi(tamagotchiID) {
    for (var i=0; i< this.tamagotchis.length; i++) {
      if (this.tamagotchis[i]) {
        if (this.tamagotchis[i].id == tamagotchiID) {
          return this.tamagotchis[i];
        }
      }
    }
    return false;
  }

  feedTamagotchi(tamagotchiID) {
    let toBeFed = this.findTamagotchi(tamagotchiID);
    toBeFed.food = 100;
  }

}
