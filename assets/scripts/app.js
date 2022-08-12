const ATTACK_VALUE = 10;
const STRONG_ATTACK = 11;
const PLAYER_VAUE = 10;
const chosenHealth = 100;
let playerHealth = chosenHealth;
let monsterHealth = chosenHealth;
adjustHealthBars(chosenHealth);

function attackHandler() {
  const damageMonster = dealMonsterDamage(ATTACK_VALUE);
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
function strongAttack() {
  const damageMonster = dealMonsterDamage(STRONG_ATTACK);
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
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttack);
