import * as readline from 'readline';
import { pokemones } from '../models/pokemones';
import { Pokemon } from '../models/pokemones';
import { pokemon1, pokemon2 } from "../utils/choosePokemon";
import { PokemonType } from "../models/pokemones";
import { Attack, attacks } from '../models/attacks';
import { Ask } from '../utils/questionForm';
import { effectivenessMap } from '../utils/effectivePokemon';

let chosenAttack: Attack; 
  

export async function BattleBegins() {

  console.log("\n !!!!! Start the Game !!!! ")
  console.log("\n The judge has decided that the pokemon that attacks first  : ", pokemon1?.name)


 
  async function ChooseAttack(): Promise<void> {
    console.log("\n  The", pokemon1.name, " attacks are:")
    pokemon1.attacks.forEach((Attack, position) => {
      console.log(position + 1, Attack.name, "(DAMAGE):", Attack.damage)
    });

    const answer = await Ask("\n >>> Player1, choose the attack that you want: ")
    const selectedanswer = parseInt(answer)

    if (selectedanswer >= 1 && selectedanswer <= pokemon1.attacks.length) {
      chosenAttack = pokemon1.attacks[selectedanswer - 1]
      let finalDamage = chosenAttack.damage;

      const effectiveAgainst = effectivenessMap.get(pokemon1.type);
      if (effectiveAgainst === pokemon2.type) {
        finalDamage *= 2;
        console.log("¡Effective Attack, your damage is doubled!");
      }
      
      pokemon2.life -= finalDamage;
      console.log(pokemon1.name, "use" ,chosenAttack.name, " and cause", finalDamage, " of damage");
      console.log(pokemon2.name, "have now", pokemon2.life, " life");
      
    } else {
      console.log("\n Invalid option, retype the attack:")
     } 
  }
  

  async function ChooseAttack2(): Promise<void> {
    console.log("\n The", pokemon2.name, " attacks are:")
    pokemon2.attacks.forEach((Attack, position) => {
      console.log(position + 1, Attack.name, "(DAMAGE):", Attack.damage )
    });

    const answer = await Ask("\n >>> Player2, choose the attack that you want: ")
    const selectedanswer = parseInt(answer)

    if (selectedanswer >= 1 && selectedanswer <= pokemon2.attacks.length) {
      chosenAttack = pokemon2.attacks[selectedanswer - 1]
     
      let finalDamage = chosenAttack.damage;

    const effectiveAgainst = effectivenessMap.get(pokemon2.type);
    if (effectiveAgainst === pokemon1.type) {
     finalDamage *= 2;
     console.log("¡Effective Attack, your damage is doubled!");
     }

     pokemon1.life -= finalDamage;
      console.log(pokemon2.name, "use" ,chosenAttack.name, " and cause", finalDamage, " of damage");
      console.log(pokemon1.name, "have now", pokemon1.life, " life");
     
    }else {
      console.log("\n Invalid option, retype the attack:")
     } 
  }
     
  
  while (pokemon1.life >= 0 && pokemon2.life >= 0) {
    await ChooseAttack();
    if (pokemon2.life <= 0) break;
    await ChooseAttack2();
  }



  if (pokemon1.life > 0) {
    console.log("\n The winning pokemon is:", pokemon1.name)
  }
  if (pokemon2.life > 0) {
    console.log("\n The winning pokemon is:", pokemon2.name)
  }  
}   

  
    
    



    


