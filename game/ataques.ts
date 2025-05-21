export class Ataque {
    nombre: string;
    daño: number;
    constructor(nombre: string, daño: number) {
        this.daño = daño
        this.nombre = nombre
    }
}

export const Impactrueno = new Ataque("Impactrueno", 16)
export const Trueno = new Ataque("Trueno", 12)

export const Llamarada = new Ataque("Llamarada", 20)
export const Llama = new Ataque("Llama", 8)

export const Cascada = new Ataque("Casacada", 18)
export const Chorro = new Ataque("Chorro", 12)

export const HojasMortales = new Ataque("HojasMortales", 17)
export const Latigazo = new Ataque("Latigazo", 16)

export const ataques: Ataque[] = [
    Impactrueno,
    Trueno,
    Llamarada,
    Llama,
    Cascada,
    Chorro,
    HojasMortales,
    Latigazo
];