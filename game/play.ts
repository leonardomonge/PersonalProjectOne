
import * as readline from 'readline';



interface Pokemon {
    id: number;
    nombre: string;
    tipo: string 
    ataque: number
    vida: number
}
let pokemon1: Pokemon 
let pokemon2: Pokemon

 const pokemones: Pokemon[] = [
    {id: 1, nombre:"Pikachu", tipo:"Electrico", ataque:33, vida:100 },
    {id: 2, nombre:"Charmander", tipo:"Fuego", ataque:34 , vida:100 },
    {id: 3, nombre:"Squirtle", tipo:"Agua", ataque:32 , vida:100 },
    {id: 4, nombre:"Bulbasur", tipo:"Planta", ataque:34 , vida:100 }
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

    const numero1 = await preguntarpokemon(" Jugador1, indica el pokemon con el que quieres luchar: ")
    const numero2 = await preguntarpokemon(" Jugador2, indica el pokemon con el que quieres luchar: ")
    const seleccion1 = parseInt(numero1)
    const seleccion2 = parseInt(numero2)
    
     
    
      if(seleccion1 >= numeromenor && seleccion1 <= numeromayor && seleccion2 >= numeromenor && seleccion2 <=numeromayor  ){

        if(seleccion1 !== seleccion2 ){
            pokemon1 = pokemones[seleccion1 - 1]
            pokemon2 = pokemones[seleccion2 - 1]
      
          console.log("----------------- ", "\n -Jugador 1 seleccionaste a: ", pokemon1.nombre , "\n -tiene un ataque de:",
          pokemon1.ataque, "\n -Es de tipo: ", pokemon1.tipo)
          console.log("----------------- ", "\n -Jugador 2 seleccionaste a: ", pokemon2.nombre , "\n -tiene un ataque de:",
          pokemon2.ataque, "\n -Es de tipo: ", pokemon2.tipo )
      
          
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


  
  
  function ComenzarBatalla( ){
    console.log( "\n !!!!! COMIENZA EL DUELO !!!! ")
    console.log(" El juez a decidido que el pokemon que ataca primero es: ", pokemon1?.nombre)
    
    if( pokemon1 && pokemon2){
      if(pokemon1.tipo === "Electrico" && pokemon2.tipo === "Agua" ){
        pokemon1.ataque = pokemon1.ataque * 2 
      }
      if(pokemon1.tipo === "Agua" && pokemon2.tipo === "Fuego" ){
        pokemon1.ataque = pokemon1.ataque * 2 
      }
      if(pokemon1.tipo === "Fuego" && pokemon2.tipo === "Planta" ){
        pokemon1.ataque = pokemon1.ataque * 2 
      }
      if(pokemon1.tipo === "planta" && pokemon2.tipo === "Electrico" ){
        pokemon1.ataque = pokemon1.ataque * 2 
      }
    }
    let vidanuevapokemon1 = null
    let vidanuevapokemon2 = null
    while(pokemon1.vida >= 0 && pokemon2.vida >= 0 ){
      //AQUI ATACA EL POKEMON 1
               if(pokemon1.vida > 0){
                  vidanuevapokemon2 = pokemon2.vida - pokemon1.ataque
                  pokemon2.vida = vidanuevapokemon2
                  console.log(pokemon1.nombre, "ataca,  la vida de", pokemon2.nombre, "baja a : ",pokemon2.vida   )
               } else {
                  console.log("el pokemon", pokemon1.nombre, "perdio su energia, no puede atacar mas" )
               }
      //AQUI ATACA EL POKEMON 2          
               if(pokemon2.vida > 0){
                  vidanuevapokemon1 = pokemon1.vida - pokemon2.ataque     
                  pokemon1.vida = vidanuevapokemon1
                  console.log(pokemon2.nombre, "ataca,  la vida de", pokemon1.nombre, "baja a : ",pokemon1.vida   )
               }else{
                  console.log("el pokemon", pokemon2.nombre, "perdio su energia, no puede atacar mas" )
               }
                   
              }
          
             if(pokemon1.vida > pokemon2.vida){
              console.log("El pokemon ganador es:", pokemon1.nombre )
             }
             if(pokemon2.vida > pokemon1.vida){
              console.log("El pokemon ganador es:", pokemon2.nombre)
             }
    
  }
async function ejecutar(){
  await ElegirPokemon();
  ComenzarBatalla();
}

ejecutar();

    


