// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - this.damage;
  }

}
 

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name;
  }

  recivedDamage(damage){
    this.health = this.health - this.damage;
    if (this.health === 0){
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${this.damage} points of damage`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }

}



// Saxon
class Saxon extends Soldier{
constructor(health, strength){
  super(health, strength)
}


recivedDamage(damage){
  this.health = this.health - this.damage;
  if (this.health === 0){
    return `A Saxon has died in combat`;
  } else {
    return `A Saxon has received ${damage} points of damage`;
  }
}

}


//*********** BONUS ************ 
// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
