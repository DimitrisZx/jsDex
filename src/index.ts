import './styles.scss';
import { Header } from './components/header/header.component';
import { QUERY_FORM, ROOT_ELEMENT } from './constants';
import { PokemonForm } from './components/pokemonForm/pokemonForm.component';
import { Store } from './store/store';
import { PokemonDisplay } from './components/pokemonDisplay/pokemonDisplay.component';
import { DOMHelper as d } from './helpers/domHelper';

class AppRenderer {
  private appRef = document.querySelector(ROOT_ELEMENT);
  private store = new Store({});
  private state: AppState = {
    currentPokemon: null,
    pokemonToSearchName: '',
    title: 'BeforeSet',
  };
  constructor() {
    document.body.insertAdjacentHTML('afterbegin', this.header.render());
  }

  private header = new Header();
  private pokeForm = new PokemonForm('PokemonForm', this.store);
  private pokeDisplay = new PokemonDisplay('PokemonDisplay', this.store);

  setState(payload: updatePackage): void {
    this.state = { ...this.state, ...payload };
    this.renderApp();
  }

  setTitle() {
    this.setState({ title: 'AfterSet' });
  }

  attachListeners(elementIdsList: string[]) {
    elementIdsList.forEach((elementId) => {
      document.querySelector(`#${elementId}`).addEventListener('click', () => this.setTitle());
    });
  }

  resetView(): void {
    this.appRef.innerHTML = '';
  }

  renderApp() {
    // this.resetView();
    // this.appRef.insertAdjacentHTML(
    //   'beforeend',
    //   `<div>
    //     ${this.pokeForm.render()}
    //     ${this.pokeDisplay.render()}
    //   </div>
    //   `,
    // );
    this.appRef.appendChild(
      d.createElement('div', { id: 'query-form', class: 'visible', 'data-view-active': true }),
    );
    this.pokeForm.render();
    this.pokeDisplay.render();
    // this.attachListeners(['button'])
  }
}

const app = new AppRenderer();
app.renderApp();
