export class Attack {
    name: string;
    damage: number;
    constructor(name: string, damage: number) {
        this.damage = damage
        this.name = name
    }
}

export const Impactthunder = new Attack("Impactthunder", 16)
export const Thunder = new Attack("Thunder", 12)

export const Flare = new Attack("Flare", 20)
export const FlameFire = new Attack("FlameFire", 8)

export const Waterfall = new Attack("Waterfall", 18)
export const WaterJet = new Attack("WaterJet", 12)

export const deathleaves = new Attack("deathleaves", 17)
export const lash = new Attack("lash", 16)

export const attacks: Attack[] = [
    Impactthunder,
    Thunder,
    Flare,
    FlameFire,
    Waterfall,
    WaterJet,
    deathleaves,
    lash
];