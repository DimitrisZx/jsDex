import { Pokedex } from "pokeapi-js-wrapper";

export class PokedexService {
    
  constructor(
    private pokedex = new Pokedex()
  ) {}

  async getPokemonByName(name: string): Promise<string> {
    const pokemon = await this.pokedex.getPokemonByName(name);
    return pokemon;
  }
}
