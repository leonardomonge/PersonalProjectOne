import { ElegirPokemon } from "./pregunta";
import {  ComenzarBatalla } from "./Batalla";


async function ejecutar(){
    await ElegirPokemon();
    ComenzarBatalla();
  }
  
  ejecutar();