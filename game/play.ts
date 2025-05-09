
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
    const numeromenor = 1
    const numeromayor = 4

    while(true){

    const numero1 = await preguntarpokemon(" Indique el numero del primer pokemon: ")
    const numero2 = await preguntarpokemon(" Indique el numero del segundo pokemon: ")
    const seleccion1 = parseInt(numero1)
    const seleccion2 = parseInt(numero2)
    
     
    
      if(seleccion1 >= numeromenor && seleccion1 <= numeromayor && seleccion2 >= numeromenor && seleccion2 <=numeromayor  ){

        if(seleccion1 !== seleccion2 ){
          const pokemon1 = pokemones[seleccion1 - 1]
          const pokemon2 = pokemones[seleccion2 - 1]
      
          console.log( " Jugador 1 seleccionaste a: ", pokemon1.nombre)
          console.log( " Jugador 2 seleccionaste a: ", pokemon2.nombre)
      
          
          rl.close();
          break; 
          
        }else{
          console.log( " !!!!! No puedes pelear con los mismos pokemones, escoge diferentes !!!! ")
        }
      
    }else{
      console.log( " !!!!! Digitaste un valor incorrecto, intenta otra vez !!!! ")
    }
    
  } 

       
}
ElegirPokemon();
    


