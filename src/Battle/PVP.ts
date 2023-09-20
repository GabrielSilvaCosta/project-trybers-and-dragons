import Battle from './Battle';
import Fighter from '../Fighter/Fighter';

class PVP extends Battle {
  private player2: Fighter; 

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints >= 0 && this.player2.lifePoints >= 0) {
      const damageToPlayer1 = this.player2.strength - this.player.defense;
      const damageToPlayer2 = this.player.strength - this.player2.defense;

      this.player.receiveDamage(damageToPlayer1);
      this.player2.receiveDamage(damageToPlayer2);
    }

    if (this.player.lifePoints === -1) {
      return -1; 
    } 
    return 1; 
  }
}

export default PVP;
