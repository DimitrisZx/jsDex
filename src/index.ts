import './styles.scss';
import { Header } from './components/header/header.component';
import { APP } from './constants';
import { Footer } from './components/footer/footer.component';
import { Content } from './components/content/content.component';
import { PokemonForm } from './components/pokemonForm/pokemonForm.component';
import { Store } from './store/store';
import { PokemonDisplay } from './components/pokemonDisplay/pokemonDisplay.component';


class AppRenderer {
  private appRef = document.querySelector(APP);
  private store = new Store()
  private state: AppState = {
    currentPokemon: null,
    pokemonToSearchName: '',
    title: 'BeforeSet'
  }


  private header = new Header(); 
  private footer = new Footer(); 
  private content = new Content();
  private pokeForm = new PokemonForm(this.store);
  private pokeDisplay = new PokemonDisplay(this.store);

  setState(payload: updatePackage):void {
    this.state = {...this.state, ...payload}
    this.renderApp();
  }

  setTitle() {
    this.setState({title: 'AfterSet'})
  }

  attachListeners(elementIdsList: string[]) {
    elementIdsList.forEach(elementId => {
      document
        .querySelector(`#${elementId}`)
        .addEventListener('click', () => this.setTitle())
    });
  }

  resetView():void { this.appRef.innerHTML = ''; }

  renderApp() {
    this.resetView();
    this.appRef.insertAdjacentHTML('beforeend', 
      `
        ${this.pokeForm.render()}
        ${this.pokeDisplay.render()}
      `)
    // this.attachListeners(['button'])
  }
}

const app = new AppRenderer();
app.renderApp();

