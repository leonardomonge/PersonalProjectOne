
import { pokemon1, pokemon2 } from "./pregunta";

export function ComenzarBatalla( ): void {
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
      
               if(pokemon1.vida > 0){
                  vidanuevapokemon2 = pokemon2.vida - pokemon1.ataque
                  pokemon2.vida = vidanuevapokemon2
                  console.log(pokemon1.nombre, "ataca,  la vida de", pokemon2.nombre, "baja a : ",pokemon2.vida   )
               } else {
                  console.log("el pokemon", pokemon1.nombre, "perdio su energia, no puede atacar mas" )
               }
             
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


    


