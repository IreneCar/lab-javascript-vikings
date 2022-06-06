// Soldier
class Soldier {
  constructor(health, strenght) {
    this.health = health;
    this.strenght = strenght;
  }

  attack () {
    return this.health;
  }

  receiveDamage(damage) {
    this.health - damage;
  }

}
  

// Viking
class Viking {}



// Saxon
class Saxon {}


//*********** BONUS ************ 
// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
