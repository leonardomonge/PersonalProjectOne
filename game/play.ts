
import * as readline from 'readline';

interface Pokemon {
    id: number;
    nombre: string;
    tipo: string 
    ataque: number
    defensa: number
}

 const pokemones: Pokemon[] = [
    {id: 1, nombre:"Pikachu", tipo:"Electrico", ataque:33 , defensa:26 },
    {id: 2, nombre:"Charmander", tipo:"Fuego", ataque:34 , defensa:25 },
    {id: 3, nombre:"Squirtle", tipo:"Agua", ataque:32 , defensa:28 },
    {id: 4, nombre:"Bulbasur", tipo:"Planta", ataque:34 , defensa:26 }
  ]
 
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function preguntarpokemon(pregunta: string): Promise<string> {
    return new Promise((resolve) => {
      rl.question(pregunta, (respuesta) => {
        resolve(respuesta);
      });
    });
  }

async function ElegirPokemon() {
  
    pokemones.forEach(info => {
      console.log("Num#:", info.id, "Nombre:", info.nombre, "Tipo:", info.tipo)
    });
 const seleccion1 = await preguntarpokemon(" Indique el primer numero:")
 const seleccion2 = await preguntarpokemon(" Indique el segundo numero:")

 const pokemon1 = pokemones[parseInt(seleccion1) - 1]
 const pokemon2 = pokemones[parseInt(seleccion2) - 1]

 console.log( " Jugador 1 seleccionaste a: ", pokemon1.nombre)
 console.log( " Jugador 2 seleccionaste a: ", pokemon2.nombre)

 rl.close();
}


ElegirPokemon();
    


 // preguntar : nombre de la funcion
 // (pregunta: string) : el parametro que recibe, sera  un string " indique el pokemon?"
 /* Promise<string>  : un objeto que representa un valor disponible cuando termine la 
 operacion, osea " el pokemon seleccionado es pikachu" pero no lo tengo hasta que yo llame otra 
 vez la funcion abajo */
 //return new Promise((resolve) => { almacena la respuesta por un momento, el es mensajero