import { PokedexService } from "../src/services/pokedex.service";

const service = new PokedexService();

test('getPokemonByName endpoint submits', () => {
  return service.getPokemonByName('eevee');
})