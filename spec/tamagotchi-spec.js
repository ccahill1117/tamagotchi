import { Tamagotchi } from './../src/tamagotchi.js';


  describe ('Tamagotchi', function() {
  it('should make it work', function() {
    var newThing = new Tamagotchi("Chris");
    expect(newThing.name).toEqual("Chris");
  })
})
