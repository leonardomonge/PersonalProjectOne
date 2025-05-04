
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
 

function ElegirPokemon(pokemones: Pokemon[] ): void {
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });


    pokemones.forEach(info =>{
        console.log("Num#:",info.id, "Nombre:",info.nombre, "Tipo:",info.tipo)
    });
    rl.question(" Elije el numero de pokemon con el que vas a luchar: ", (respuesta:string) => {

      const idElegido = parseInt(respuesta);
      const seleccionado = pokemones.find(p => p.id === idElegido);

     console.log(" El pokemon que elejiste fue: ",  seleccionado?.nombre)
     rl.close();
    });


}

ElegirPokemon(pokemones)
    
  

 