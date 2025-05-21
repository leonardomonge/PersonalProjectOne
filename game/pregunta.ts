
import * as readline from 'readline';
import type { Pokemon } from './pokemones';
import { pokemones } from './pokemones';

 

  export let pokemon1: Pokemon;
  export let pokemon2: Pokemon;

function preguntarpokemon(pregunta: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    return new Promise((resolve) => {
      rl.question(pregunta, (respuesta) => {
        rl.close();
        resolve(respuesta);
      });
    });
  }

export async function ElegirPokemon(): Promise<void> {
  
    pokemones.forEach((info: Pokemon) => {
      console.log("Num#:", info.id, "Nombre:", info.nombre, "Tipo:", info.tipo)
    });
    const numeromenor = 1
    const numeromayor = 4

    while(true){

    const numero1 = await preguntarpokemon(" Jugador1, indica el pokemon con el que quieres luchar: ")
    const numero2 = await preguntarpokemon(" Jugador2, indica el pokemon con el que quieres luchar: ")
    const seleccion1 = parseInt(numero1)
    const seleccion2 = parseInt(numero2)
    
     
    
      if(seleccion1 >= numeromenor && seleccion1 <= numeromayor && seleccion2 >= numeromenor && seleccion2 <=numeromayor  ){

        if(seleccion1 !== seleccion2 ){
            pokemon1 = pokemones[seleccion1 - 1]
            pokemon2 = pokemones[seleccion2 - 1]
      
          console.log("----------------- ", "\n -Jugador 1 seleccionaste a: ", pokemon1.nombre , "\n -Es de tipo: ", pokemon1.tipo)
          console.log("----------------- ", "\n -Jugador 2 seleccionaste a: ", pokemon2.nombre , "\n -Es de tipo: ", pokemon2.tipo )
          break; 
        }else{
          console.log( " !!!!! No puedes pelear con los mismos pokemones, escoge diferentes !!!! ")
        }
      
    }else{
      console.log( " !!!!! Digitaste un valor incorrecto, intenta otra vez !!!! ")
    }
  } 
}
