import { PokemonType } from "../models/pokemones";

export const effectivenessMap = new Map<PokemonType, PokemonType>([

    // este pokemon es efectivo contra este otro pokemon.
    [PokemonType.Electric, PokemonType.Water],
    [PokemonType.Water, PokemonType.Fire],
    [PokemonType.Fire, PokemonType.Plant],
    [PokemonType.Plant, PokemonType.Electric],
  ]);