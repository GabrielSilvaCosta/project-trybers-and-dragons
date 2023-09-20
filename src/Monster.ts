import Fighter from './Fighter';
import getRandomInt from './utils';

class Monster implements Fighter {
  protected _lifePoints = 85; 
  private _strength = 63;
  private _defense: number = getRandomInt(1, 10);

  levelUp(): void {
    this._defense += 5;
  }

  getLifePoints(): number {
    return this._lifePoints;
  }

  get defense(): number {
    return this._defense;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}

const monster = new Monster();
console.log(monster.getLifePoints());

export default Monster;
