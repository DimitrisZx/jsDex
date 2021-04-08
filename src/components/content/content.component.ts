import { Component } from "../../helpers/component";
import { PokedexService } from "../../services/pokedex.service";
import "./style.scss";

const pkx = new PokedexService();
async function getPokemon() {
  console.log(await pkx.getPokemonByName('eevee'))
}
getPokemon()
export class Content extends Component {
  render(): string {
    
    return (
      `
      <main class="content">This is the main content of the page</main>
      `
    )
  }
}