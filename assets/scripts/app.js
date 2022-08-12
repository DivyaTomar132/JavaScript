const ATTACK_VALUE = 10;
const STRONG_ATTACK = 11;
const PLAYER_VAUE = 10;
const HEAL_PLAYER = 15;
const chosenHealth = 100;
let playerHealth = chosenHealth;
let monsterHealth = chosenHealth;
adjustHealthBars(chosenHealth);

function attack(type) {
  let damage;
  if (type === "Attack") {
    damage = ATTACK_VALUE;
  } else if (type === "StrongAttack") {
    damage = STRONG_ATTACK;
  }
  const damageMonster = dealMonsterDamage(damage);
  monsterHealth -= damageMonster;
  const damagePlayer = dealPlayerDamage(PLAYER_VAUE);
  playerHealth -= damagePlayer;
  if (monsterHealth <= 0 && playerHealth > 0) {
    alert("You Won");
  } else if (monsterHealth > 0 && playerHealth <= 0) {
    alert("You Lost");
  } else if (monsterHealth <= 0 && playerHealth <= 0) {
    alert("Draw");
  }
}

function attackHandler() {
  attack("Attack");
}
function strongAttack() {
  attack("StrongAttack");
}
function healPlayer() {
  let heal;
  if (playerHealth >= chosenHealth - HEAL_PLAYER) {
    alert("Max Heal reached");
    heal = chosenHealth - playerHealth;
  } else {
    heal = HEAL_PLAYER;
  }
  increasePlayerHealth(heal);
  playerHealth += heal;
}
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttack);
healBtn.addEventListener("click", healPlayer);
