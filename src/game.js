export function Game() {
  this.tamagotchis = [];
}

Game.prototype.addTamagotchi = function(tamagotchi) {
  this.tamagotchis.push(tamagotchi);
}
