export function Tamagotchi(name) {
  this.name = name;
  this.id = Tamagotchi.prototype.incrementID();
  this.food = 100;
  this.sleep = 100;
  this.play = 100;
  this.overTime = setInterval(() => {
    this.food--;
    this.sleep--;
    this.boredom--;
  }, 2000)
}

Tamagotchi.prototype.incrementID = function() {
    if (!this.latestId) this.latestId = 1
    else this.latestId++
    return this.latestId
}
