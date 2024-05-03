function _getRandomValue(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      roundCounter: 0,
      specialAttackResetRound: 0,
      winner: null,
      battleLog: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    canSpecialAttack() {
      return this.roundCounter >= this.specialAttackResetRound;
    },
    canHeal() {
      return this.playerHealth < 100;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
        this.battleLog.push(
          "It's a draw both you and the monster take each other out!"
        );
      } else if (value <= 0) {
        this.winner = "monster";
        this.battleLog.push("Oh no! The monster delivers a crushing blow!");
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
        this.battleLog.push(
          "It's a draw both you and the monster take each other out!"
        );
      } else if (value <= 0) {
        this.winner = "player";
        this.battleLog.push(
          "Congratulations! You land a final attack and defeat the monster!"
        );
      }
    },
  },
  methods: {
    resetGame() {
      this.roundCounter = 0;
      this.specialAttackResetRound = 0;
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.winner = null;
      this.battleLog = [];
    },
    attackMonster() {
      this.roundCounter++;
      const attackDamage = _getRandomValue(5, 12);
      this.monsterHealth -= attackDamage;
      this.battleLog.push(
        "You attack the monster, dealing " + attackDamage + " damage!"
      );
      this.attackPlayer();
    },
    attackPlayer() {
      const attackDamage = _getRandomValue(8, 15);
      this.playerHealth -= attackDamage;
      this.battleLog.push(
        "Monster attacks you, dealing " + attackDamage + " damage!"
      );
    },
    specialAttackMonster() {
      this.roundCounter++;
      this.specialAttackResetRound = this.roundCounter + 3;
      const attackDamage = _getRandomValue(10, 25);
      this.monsterHealth -= attackDamage;
      this.battleLog.push(
        "You special attack the monster, dealing " + attackDamage + " damage!"
      );
      this.attackPlayer();
    },
    healPlayer() {
      this.roundCounter++;
      const healAmount = _getRandomValue(8, 15);
      if (this.playerHealth + healAmount > 100) {
        this.playerHealth = 100;
        this.battleLog.push("You heal up, restoring to full health!");
      } else {
        this.playerHealth += healAmount;
        this.battleLog.push("You heal up, restoring " + healAmount + " HP!");
      }
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
  },
}).mount("#game");
