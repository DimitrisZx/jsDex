import { ROOT_ELEMENT } from "../../constants";
import { Component } from "../../helpers/component";
import { DOMHelper as d} from "../../helpers/domHelper";
import { capitalize } from "../../helpers/helperFunctions";
import { ImageElement } from "../../helpers/htmlComponents";
import { IInformable } from "../../interfaces/informable.interface";
import { Store } from "../../store/store";

export class PokemonDisplay extends Component implements IInformable {
  public componentName = 'PokemonDisplay';
  public subscriptionBinder;
  public pokemonTitle = (): HTMLElement => document.querySelector('#pokemon-name')

  constructor(componentName: string ,store: Store) {
    super(componentName, store);
    this.subscriptionBinder = this.store.subscribe(this);
  }

  inform(state: AppState): void {
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
    const parentDiv = d.createElement('div', {class: 'card'})
    const title = d.createElement('div', {class:"card-title" ,id: 'pokemon-name', textContent: 'Search for a Pokemon'})
    const cardBody = d.createElement('div', {class: 'card-body'});
    const pokemonImage = d.createElement('img', {class:'', height:"96", width:'96', src: 'https://i.pinimg.com/564x/c5/f0/fa/c5f0fa5ac14327b8330fde1c621ffa8a.jpg', alt: 'image of current pokemon', id: 'pokemon-image'})
    const evolutions = d.createElement('ul', {id: 'evolutions'});
    
    const finalElement = d.appendChildren(parentDiv, d.appendChildren(cardBody, title, pokemonImage, evolutions))
    document.querySelector(ROOT_ELEMENT).appendChild(finalElement)
    return '';
  }
}