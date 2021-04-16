import { Pokedex } from "pokeapi-js-wrapper";
import { resolve } from "../../webpack.common";

export class PokedexService {
    
  constructor(
    private pokedex = new Pokedex()
  ) {}
  
  async getPokemonByName(name: string): Promise<Record<string, never>> {
    if (name.length > 0) {
      const pokemon = await this.pokedex.getPokemonByName(name);
      const pokemon2 = await this.pokedex.getPokemonSpeciesByName(name)
      const evolutionChain = await this.getPokemonEvolutionChainByURL(pokemon2.evolution_chain.url);
      const nextFormsNames = evolutionChain.chain.evolves_to.map((evolution: any) => evolution.species.name) 
      const evolutions = await this.getEvolutionsByPokemonNames(nextFormsNames)
      console.log(evolutions)
      return {...pokemon, evolutions};
    }
    return {};
  }

  async getPokemonEvolutionChainByURL(evolutionChainURL: string): Promise<any> {
    return await fetch(evolutionChainURL).then(resp => resp.json())
  }

  async getEvolutionsByPokemonNames(names: string[]): Promise<PokemonRecord[]> {
    return await Promise.all(
      names.map(name => this.pokedex.getPokemonByName(name))
    )
  }
}
