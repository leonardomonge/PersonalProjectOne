
let pokemon1vida = 100
let pokemon2vida = 100
let pokemon1ataque = 65
let pokemon2ataque = 67
let contador = 1
let vidanuevapokemon1 = null
let vidanuevapokemon2 = null

        while(pokemon1vida >= 0 && pokemon2vida >= 0 ){
//AQUI ATACA EL POKEMON 1
         if(pokemon1vida > 0){
            vidanuevapokemon2 = pokemon2vida - pokemon1ataque
            pokemon2vida = vidanuevapokemon2
            console.log("El pokemon1 ataca,  la vida del pokemon 2 baja a : ",pokemon2vida   )
         } else {
            console.log("el pokemon1 perdio su energia, no puede atacar mas" )
         }
//AQUI ATACA EL POKEMON 2          
         if(pokemon2vida > 0){
           let  vidanuevapokemon1 = pokemon1vida - pokemon2ataque       
            pokemon1vida = vidanuevapokemon1
            console.log("El pokemon2 ataca, la vida del pokemon 1 baja a : ",pokemon1vida )
         }else{
            console.log("el pokemon2 perdio su energia, no puede atacar mas " )
         }
             
        }
    
       if(pokemon1vida > pokemon2vida){
        console.log( " gana el pokemon 1")
       }
       if(pokemon2vida > pokemon1vida){
        console.log( " gana el pokemon 2")
       }