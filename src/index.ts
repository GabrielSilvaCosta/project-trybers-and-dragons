import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import PVP from './Battle/PVP';
import PVE from './Battle/PVE';
import Battle from './Battle';

// Cria 3 objetos do tipo Character
const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');

// Execute algumas vezes o método levelUp do player1
player1.levelUp();
player1.levelUp();
player1.levelUp();

// Cria 2 objetos do tipo Monster
const monster1 = new Monster();
const monster2 = new Dragon(); 

// Cria um objeto do tipo PVP
const pvp = new PVP(player2, player3);

// Cria um objeto do tipo PVE
const pve = new PVE(player1, [monster1, monster2]);

// Função para executar as batalhas for each cada um
function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => {
    battle.fight();
  });
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
