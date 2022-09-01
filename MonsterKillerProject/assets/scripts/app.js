const ATTACK_VALUE = 10;
const STRONG_ATTACK = 11;
const PLAYER_VALUE = 10;
const HEAL_PLAYER = 15;
const userInput = prompt("Enter initial health for monster and player", "100");
let hasBonus = true;
let chosenHealth = parseInt(userInput);
let battleLog = [];
if (isNaN(chosenHealth) || chosenHealth <= 0) {
  chosenHealth = 100;
}
let playerHealth = chosenHealth;
let monsterHealth = chosenHealth;
adjustHealthBars(chosenHealth);

function attackPlayer() {
  const initialPlayerHealth = playerHealth;
  const damagePlayer = dealPlayerDamage(PLAYER_VALUE);
  playerHealth -= damagePlayer;
  if (playerHealth <= 0 && hasBonus) {
    removeBonusLife();
    playerHealth = initialPlayerHealth;
    setPlayerHealth(playerHealth);
    alert("Bonus Used, Health Recoverd to most recent health");
    hasBonus = false;
  }
  if (monsterHealth <= 0 && playerHealth > 0) {
    alert("You Won");
    logEvent("player won");
  } else if (monsterHealth > 0 && playerHealth <= 0) {
    alert("You Lost");
    logEvent("player lost");
  } else if (monsterHealth <= 0 && playerHealth <= 0) {
    alert("Draw");
    logEvent("draw ");
    reset(); // reset game only when there is a Draw
  }
  logEvent("player attacked");
}

function attack(type) {
  let damage;
  if (type === "Attack") {
    damage = ATTACK_VALUE;
  } else if (type === "StrongAttack") {
    damage = STRONG_ATTACK;
  }
  const damageMonster = dealMonsterDamage(damage);
  monsterHealth -= damageMonster;
  logEvent("monster attack");
  attackPlayer();
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
  logEvent("player healed");
  playerHealth += heal;
  //player should be hit by monster after every heal
  attackPlayer();
}

function reset() {
  playerHealth = chosenHealth;
  monsterHealth = chosenHealth;
  logEvent("reset");
  resetGame(chosenHealth);
}

function logEvent(type) {
  logEntry = {
    event: type,
  };
  battleLog.push(logEntry);
}

function logButton() {
  console.log(battleLog);
}
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttack);
healBtn.addEventListener("click", healPlayer);
logBtn.addEventListener("click", logButton);
