
import * as readline from 'readline';
import type { Pokemon } from '../models/pokemones';
import { pokemones } from '../models/pokemones';
import { Ask } from './questionForm';

 

  export let pokemon1: Pokemon;
  export let pokemon2: Pokemon;


export async function ChoosePokemon(): Promise<void> {
  
    pokemones.forEach((info: Pokemon) => {
      console.log("Num#:", info.id, "Name:", info.name, "Type:", info.type)
    });
    const smallNumber = 1
    const largeNumber = 4

    while(true){

    const number1 = await Ask(" Player1, choose the pokemon that you want to fight: ")
    const number2 = await Ask(" Player2, choose the pokemon that you want to fight: ")
    const selection1 = parseInt(number1)
    const selection2 = parseInt(number2)
    
     
    
      if(selection1 >= smallNumber && selection1 <= largeNumber && selection2 >= smallNumber && selection2 <=largeNumber  ){

        if(selection1 !== selection2 ){
            pokemon1 = pokemones[selection1 - 1]
            pokemon2 = pokemones[selection2 - 1]
      
          console.log("----------------- ", "\n -Player 1 selected: ", pokemon1.name , "\n -Type: ", pokemon1.type)
          console.log("----------------- ", "\n -Player 2 selected: ", pokemon2.name , "\n -Type: ", pokemon2.type )
          break; 
        }else{
          console.log( " !!!!! You can't fight with the same Pokemones, choose different ones !!!! ")
        }
      
    }else{
      console.log( " !!!!! You entered an incorrect value, please try again !!!! ")
    }
  } 
}
