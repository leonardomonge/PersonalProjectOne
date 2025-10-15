
import { PokemonType, Pokemon } from "../models/pokemones";
import { BattleBegins } from "../core/Battle";
import * as choosePokemon from "../utils/choosePokemon";
import * as questionForm from "../utils/questionForm";

// Mock para Ask (para no usar readline en tests)
jest.mock("../utils/questionForm", () => ({
    Ask: jest.fn(),
  }));
  
  describe("Battle System", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it("should reduce pokemon2 life after pokemon1 attacks", async () => {
      // --- Creamos dos Pokémon manualmente ---
      const pikachu = new Pokemon(1, "Pikachu", PokemonType.Electric, 10, [
        { name: "Thunder", damage: 10 },
      ]);
      const squirtle = new Pokemon(2, "Squirtle", PokemonType.Water, 10, [
        { name: "WaterGun", damage: 5 },
      ]);
  
      // --- Asignamos los Pokémon a las variables exportadas ---
      (choosePokemon as any).pokemon1 = pikachu;
      (choosePokemon as any).pokemon2 = squirtle;
  
      // --- Mockeamos las respuestas de Ask ---
      // Player1 elige ataque 1, Player2 elige ataque 1
      (questionForm.Ask as any)
        .mockResolvedValueOnce("1") // Player1 attack
        .mockResolvedValueOnce("1"); // Player2 attack
  
      // --- Ejecutamos la batalla ---
      await BattleBegins();
  
      // --- Verificamos que la vida del segundo Pokémon bajó ---
      expect(squirtle.life).toBeLessThan(100);
    });
  
    it("should declare a winner correctly", async () => {
      const pikachu = new Pokemon(1, "Pikachu", PokemonType.Electric, 20, [
        { name: "Thunder", damage: 20 },
      ]);
      const squirtle = new Pokemon(2, "Squirtle", PokemonType.Water, 10, [
        { name: "WaterGun", damage: 5 },
      ]);
  
      (choosePokemon as any).pokemon1 = pikachu;
      (choosePokemon as any).pokemon2 = squirtle;
  
      // Player1 ataca primero y debería ganar
      (questionForm.Ask as any).mockResolvedValueOnce("1");
      await BattleBegins();
  
      // Pikachu debería seguir vivo, Squirtle no
      expect(pikachu.life).toBeGreaterThan(0);
      expect(squirtle.life).toBeLessThanOrEqual(0);
    });
  });