import { Attack } from "./attacks";
import { Impactthunder, Thunder, Flare,FlameFire,Waterfall,WaterJet,deathleaves,lash  } from "./attacks";

export enum PokemonType {
    Electric = "Electric",
    Fire = "Fire",
    Water = "Water",
    Plant = "Plant"
}
export class Pokemon {
    id: number;
    name: string;
    type: string 
    life: number
    attacks: Attack[]

constructor(id: number, name: string, type: string, life: number, attacks:Attack[] ){
    this.id = id
    this.name = name
    this.type = type
    this.life = life
    this.attacks = attacks 
}
}


export class Pikachu extends Pokemon{

    constructor(){
        super(1, "Pikachu", PokemonType.Electric, 100, [Impactthunder, Thunder]);
        
    }
}
export class Charmander extends Pokemon{
   
    constructor(){
        super(2, "Charmander",PokemonType.Fire, 100,[FlameFire,Flare]);
        
    }
}
export class Squirtle extends Pokemon{
  
    constructor(){
        super(3,"Squirtle",PokemonType.Water, 100,[Waterfall, WaterJet] );
        
    }
}
export class Bulbasur extends Pokemon{
   
    constructor(){
        super(4,"Bulbasur",PokemonType.Plant, 100,[deathleaves, lash]  );
       
    }
}

export const pokemones: Pokemon[] = [
    new Pikachu(),
    new Charmander(),
    new Squirtle(),
    new Bulbasur()
  ];
