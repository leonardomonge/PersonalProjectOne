import { ChoosePokemon } from "../utils/choosePokemon";
import {  BattleBegins } from "./Battle";



async function execute(){
    await ChoosePokemon();
    BattleBegins();
    
    
  }
  
  execute();