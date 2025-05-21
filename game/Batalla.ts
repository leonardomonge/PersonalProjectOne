import * as readline from 'readline';
import { pokemones } from './pokemones';
import { Pokemon } from './pokemones';
import { pokemon1, pokemon2 } from "./pregunta";
import { Pikachu, TipoPokemon } from "./pokemones";
import { Ataque, ataques } from './ataques';


/* export function AtaquesEspecificos( ): void {

    console.log("\n !!!!! COMIENZA EL DUELO !!!! ")
    console.log("\n El juez a decidido que el pokemon que ataca primero es: ", pokemon1?.nombre)
    
    /* if( pokemon1 && pokemon2){
      if(pokemon1.tipo === TipoPokemon.Electrico && pokemon2.tipo === TipoPokemon.Agua ){
        pokemon1.ataque = pokemon1.ataque * 2 
      }
      if(pokemon1.tipo === TipoPokemon.Agua  && pokemon2.tipo === TipoPokemon.Fuego ){
        pokemon1.ataque = pokemon1.ataque * 2 
      }
      if(pokemon1.tipo === TipoPokemon.Fuego && pokemon2.tipo === TipoPokemon.Planta ){
        pokemon1.ataque = pokemon1.ataque * 2 
      }
      if(pokemon1.tipo === TipoPokemon.Planta && pokemon2.tipo === TipoPokemon.Electrico ){
        pokemon1.ataque = pokemon1.ataque * 2 
      }
    } */
  



// Esto es un machote para hacer preguntas, peude estar afuera de la funcion
function preguntarAtaque(pregunta: string): Promise<string> {
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


export async function ComenzarBatalla() {

  console.log("\n !!!!! COMIENZA EL DUELO !!!! ")
  console.log("\n El juez a decidido que el pokemon que ataca primero es: ", pokemon1?.nombre)


  const numMeno = 1
  const numMayo = 2
  // le pregunto cual ataque va a elegir 
  async function ElegirAtaque(): Promise<void> {
    console.log(" los ataques de: ", pokemon1.nombre, "son:")
    pokemon1.ataques.forEach((Ataque, posicion) => {
      console.log(posicion + 1, Ataque.nombre, "Daño:", Ataque.daño)
    });

    const respuesta = await preguntarAtaque(" Jugador1, indica el ataque que quieres aplicar: ")
    const respuestaSeleccionada = parseInt(respuesta)

    if (respuestaSeleccionada >= 1 && respuestaSeleccionada <= pokemon1.ataques.length) {
      let ataque1 = pokemon1.ataques[respuestaSeleccionada - 1]
      pokemon2.vida -= ataque1.daño
      console.log(pokemon1.nombre, "ataca con", ataque1.nombre, "la vida de", pokemon2.nombre, "baja:", pokemon2.vida)
    } else {
      console.log("opcion ivalidad")
    }
  }


  async function ElegirAtaque2(): Promise<void> {
    console.log(" los ataques de: ", pokemon2.nombre, "son:")
    pokemon2.ataques.forEach((Ataque, posicion) => {
      console.log(posicion + 1, Ataque.nombre, "Daño:", Ataque.daño)
    });

    const respuesta = await preguntarAtaque(" Jugador2, indica el ataque que quieres aplicar: ")
    const respuestaSeleccionada = parseInt(respuesta)

    if (respuestaSeleccionada >= 1 && respuestaSeleccionada <= pokemon2.ataques.length) {
      let ataque1 = pokemon2.ataques[respuestaSeleccionada - 1]
      pokemon1.vida -= ataque1.daño
      console.log(pokemon2.nombre, "ataca con", ataque1.nombre, "la vida de", pokemon1.nombre, "baja:", pokemon1.vida)
    } else {
      console.log("opcion ivalidad")
    }
  }



  while (pokemon1.vida >= 0 && pokemon2.vida >= 0) {
    await ElegirAtaque();
    if (pokemon2.vida <= 0) break;
    await ElegirAtaque2();
  }



  if (pokemon1.vida > 0) {
    console.log("El pokemon ganador es:", pokemon1.nombre)
  }
  if (pokemon2.vida > 0) {
    console.log("El pokemon ganador es:", pokemon2.nombre)
  }

}

    

  
    
    



    


