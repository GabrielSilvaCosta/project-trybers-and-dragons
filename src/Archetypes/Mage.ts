import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static countInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.countInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return Mage.countInstances;
  }
}

export default Mage;
