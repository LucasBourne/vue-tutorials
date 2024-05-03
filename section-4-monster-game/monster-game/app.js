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
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
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
    },
    attackMonster() {
      this.roundCounter++;
      const attackDamage = _getRandomValue(5, 12);
      this.monsterHealth -= attackDamage;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackDamage = _getRandomValue(8, 15);
      this.playerHealth -= attackDamage;
    },
    specialAttackMonster() {
      this.roundCounter++;
      this.specialAttackResetRound = this.roundCounter + 3;
      const attackDamage = _getRandomValue(10, 25);
      this.monsterHealth -= attackDamage;
      this.attackPlayer();
    },
    healPlayer() {
      this.roundCounter++;
      const healAmount = _getRandomValue(8, 15);
      if (this.playerHealth + healAmount > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healAmount;
      }
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
  },
}).mount("#game");
