import { ElegirPokemon } from "./pregunta";
import { AtaquesEspecificos, ComenzarBatalla } from "./Batalla";

async function ejecutar(){
    await ElegirPokemon();
    AtaquesEspecificos();
    ComenzarBatalla();
  }
  
  ejecutar();