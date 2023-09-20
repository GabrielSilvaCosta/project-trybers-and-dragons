import Battle from './Battle';
import Fighter from '../Fighter/Fighter';
import SimpleFighter from '../Fighter/SimpleFighter';

class PVE extends Battle {
  private monsters: (Fighter | SimpleFighter)[];

  constructor(character: Fighter, monsters: (Fighter | SimpleFighter)[]) {
    super(character);
    this.monsters = monsters;
  }

  fight(): number {
    while (this.player.lifePoints >= 0 && this.areMonstersAlive()) {
      const damageToPlayer = this.calculatePlayerDamage();
      this.player.receiveDamage(damageToPlayer);

      this.attackMonsters();
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }

  private areMonstersAlive(): boolean {
    return this.monsters.some((monster) => monster.lifePoints >= 0);
  }

  private calculatePlayerDamage(): number {
    return this.monsters.reduce((totalDamage, monster) => {
      if ('defense' in monster) {
        return totalDamage + (monster.strength - this.player.defense);
      }
      return totalDamage + (monster.strength - this.player.defense);
    }, 0);
  }

  private attackMonsters(): void {
    this.monsters.forEach((monster) => {
      if (this.player.lifePoints >= 0 && monster.lifePoints >= 0) {
        const damageToMonster = 'defense' in monster
          ? this.player.strength - monster.defense
          : this.player.strength - 0;
        monster.receiveDamage(damageToMonster);
      }
    });
  }
}

export default PVE;
