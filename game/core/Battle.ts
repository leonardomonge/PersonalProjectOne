import * as readline from 'readline';
import { pokemones } from '../models/pokemones';
import { Pokemon } from '../models/pokemones';
import { pokemon1, pokemon2 } from "../utils/choosePokemon";
import { PokemonType } from "../models/pokemones";
import { Attack, attacks } from '../models/attacks';
import { Ask } from '../utils/questionForm';

let chosenAttack: Attack; 
  

export async function BattleBegins() {

  console.log("\n !!!!! Start the Game !!!! ")
  console.log("\n The judge has decided that the pokemon that attacks first  : ", pokemon1?.name)


  const numMeno = 1
  const numMayo = 2
  

  async function ChooseAttack(): Promise<void> {
    console.log("\n  The", pokemon1.name, " attacks are:")
    pokemon1.attacks.forEach((Attack, position) => {
      console.log(position + 1, Attack.name, "(DAMAGE):", Attack.damage)
    });

    const answer = await Ask("\n Player1, choose the attack that you want: ")
    const selectedanswer = parseInt(answer)

    if (selectedanswer >= 1 && selectedanswer <= pokemon1.attacks.length) {
      chosenAttack = pokemon1.attacks[selectedanswer - 1]

      if( pokemon1 && pokemon2){
        if(pokemon1.type === PokemonType.Electric && pokemon2.type === PokemonType.Water ){
          chosenAttack.damage = chosenAttack.damage * 2 
        }
        if(pokemon1.type === PokemonType.Water  && pokemon2.type === PokemonType.Fire ){
          chosenAttack.damage = chosenAttack.damage * 2 
        }
        if(pokemon1.type === PokemonType.Fire && pokemon2.type === PokemonType.Plant){
          chosenAttack.damage = chosenAttack.damage * 2  
        }
        if(pokemon1.type === PokemonType.Plant && pokemon2.type === PokemonType.Electric ){
          chosenAttack.damage= chosenAttack.damage * 2  
        }
      } 
      pokemon2.life -= chosenAttack.damage
      console.log("\n", pokemon1.name, "attack with", chosenAttack.name, ", the life of", pokemon2.name, "low:", pokemon2.life)
    } else {
      console.log("\n Invalid option, retype the attack:")
    }
  }

  



  async function ChooseAttack2(): Promise<void> {
    console.log("\n The", pokemon2.name, " attacks are:")
    pokemon2.attacks.forEach((Attack, position) => {
      console.log(position + 1, Attack.name, "(DAMAGE):", Attack.damage )
    });

    const answer = await Ask("\n Player2, choose the attack that you want: ")
    const selectedanswer = parseInt(answer)

    if (selectedanswer >= 1 && selectedanswer <= pokemon2.attacks.length) {
      chosenAttack = pokemon2.attacks[selectedanswer - 1]

      if( pokemon1 && pokemon2){
        if(pokemon1.type === PokemonType.Electric && pokemon2.type === PokemonType.Water ){
          chosenAttack.damage = chosenAttack.damage * 2 
        }
        if(pokemon1.type === PokemonType.Water  && pokemon2.type === PokemonType.Fire ){
          chosenAttack.damage = chosenAttack.damage * 2 
        }
        if(pokemon1.type === PokemonType.Fire && pokemon2.type === PokemonType.Plant ){
          chosenAttack.damage = chosenAttack.damage * 2  
        }
        if(pokemon1.type === PokemonType.Plant && pokemon2.type === PokemonType.Electric ){
          chosenAttack.damage= chosenAttack.damage * 2  
        }
      } 
      pokemon1.life -= chosenAttack.damage
      console.log("\n", pokemon2.name, "Attack with", chosenAttack.name, ", the life of the", pokemon1.name, "low:", pokemon1.life)
    } else {
      console.log("\n Invalid option, retype the attack: ")
    }
  }

    
  
     
  while (pokemon1.life >= 0 && pokemon2.life >= 0) {
    await ChooseAttack();
    if (pokemon2.life <= 0) break;
    await ChooseAttack2();
  }



  if (pokemon1.life > 0) {
    console.log("The winning pokemon is:", pokemon1.name)
  }
  if (pokemon2.life > 0) {
    console.log("The winning pokemon is:", pokemon2.name)
  }

}

    

  
    
    



    


