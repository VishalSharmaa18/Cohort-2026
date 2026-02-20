const playerHealth = 75;
const hasShield = true;
const hasSword = false;

if(playerHealth <= 0){
    return "game Over"
}
if(playerHealth <=30 && hasShield){
  return "Use medkit"
}