// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health = this.health - this.theDamage;
  }

}
  

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name;
  }

  recivedDamage(theDamage){
    this.health = this.health - this.theDamage;
    if (this.health === 0){
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${this.theDamage} points of damage`;
    }
  }

}



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
