import { Ataque } from "./ataques";
import { Impactrueno, Trueno, Llamarada, Llama, Cascada, Chorro, HojasMortales, Latigazo } from "./ataques";

export enum TipoPokemon {
    Electrico = "Electrico",
    Fuego = "Fuego",
    Agua = "Agua",
    Planta = "Planta"
}
export class Pokemon {
    id: number;
    nombre: string;
    tipo: string 
    vida: number
    ataques: Ataque[]

constructor(id: number, nombre: string, tipo: string, vida: number, ataques:Ataque[] ){
    this.id = id
    this.nombre = nombre
    this.tipo = tipo
    this.vida = vida
    this.ataques = ataques 
}
}


export class Pikachu extends Pokemon{

    constructor(){
        super(1, "Pikachu", TipoPokemon.Electrico, 100, [Impactrueno, Trueno]);
        
    }
}
export class Charmander extends Pokemon{
   
    constructor(){
        super(2, "Charmander",TipoPokemon.Fuego, 100,[Llamarada, Llama]);
        
    }
}
export class Squirtle extends Pokemon{
  
    constructor(){
        super(3,"Squirtle",TipoPokemon.Agua, 100,[Cascada, Chorro] );
        
    }
}
export class Bulbasur extends Pokemon{
   
    constructor(){
        super(4,"Bulbasur",TipoPokemon.Planta, 100,[HojasMortales, Latigazo]  );
       
    }
}

export const pokemones: Pokemon[] = [
    new Pikachu(),
    new Charmander(),
    new Squirtle(),
    new Bulbasur()
  ];
