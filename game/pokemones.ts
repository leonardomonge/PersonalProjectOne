



export class Pokemon {
    id: number;
    nombre: string;
    tipo: string 
    ataque: number
    vida: number
constructor(id: number, nombre: string, tipo: string, ataque: number,  vida: number){
    this.id = id
    this.nombre = nombre
    this.tipo = tipo
    this.ataque = ataque
    this.vida = vida
}
}
export class Pikachu extends Pokemon{
  
    constructor(){
        super(1, "Pikachu", "Electrico", 33,100);
    }
}
export class Charmander extends Pokemon{
  
    constructor(){
        super(2, "Charmander", "Fuego", 34 , 100);
    }
}
export class Squirtle extends Pokemon{
  
    constructor(){
        super(3,"Squirtle","Agua", 32 , 100 );
    }
}
export class Bulbasur extends Pokemon{
  
    constructor(){
        super(4,"Bulbasur","Planta", 34 , 100  );
    }
}

export const pokemones: Pokemon[] = [
    new Pikachu(),
    new Charmander(),
    new Squirtle(),
    new Bulbasur()
  ];
