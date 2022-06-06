// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack () {
    return this.health;
  }

  receiveDamage(theDamage) {
    this.health - theDamage;
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
