import { Component } from "../../helpers/component";
import { DOMHelper as d} from "../../helpers/domHelper";
import { capitalize } from "../../helpers/helperFunctions";
import { ImageElement } from "../../helpers/htmlComponents";
import { IInformable } from "../../interfaces/informable.interface";
import { Store } from "../../store/store";

export class PokemonDisplay extends Component implements IInformable {
  componentName = 'PokemonDisplay';
  public subscriptionBinder;
  pokemonTitle = (): HTMLElement => document.querySelector('#pokemon-name')
  constructor(store: Store) {
    super(store);
    this.subscriptionBinder = this.store.subscribe(this);
  }

  inform(state: any): void {
    console.log('I have been informed! ' + this.componentName)
    console.log('New State', state)
    this.pokemonTitle().textContent = capitalize(state.currentPokemon.name); 
    document.querySelector('#pokemon-image').setAttribute('src', state.currentPokemon.sprites.front_default)
    const evolutions = state
      .currentPokemon
      .evolutions
      .map((evolution: PokemonRecord) => ImageElement({src: evolution.sprites.front_default, textContent: evolution.name}));
    const evolutionsElement = document.querySelector('#evolutions');
    evolutionsElement.innerHTML = '';
    evolutions.forEach((element: HTMLElement) => document.querySelector('#evolutions').appendChild(element));
  }

  render(): HTMLElement | string {
    const parentDiv = d.createElement('div', {class: 'container'})
    const title = d.createElement('div', {src: 'https://i.pinimg.com/564x/c5/f0/fa/c5f0fa5ac14327b8330fde1c621ffa8a.jpg',id: 'pokemon-name', textContent: 'Search for a Pokemon'})
    const pokemonImage = d.createElement('img', {alt: 'image of current pokemon', id: 'pokemon-image'})
    const evolutions = d.createElement('ul', {id: 'evolutions'});
    const finalElement = d.appendChildren(parentDiv, title, pokemonImage, evolutions)
    document.body.appendChild(finalElement)
    return '';
  }
}