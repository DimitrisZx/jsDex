import './styles.scss';
import { Header } from './components/header.component';
import { APP } from './constants';

const header = new Header();

class AppRenderer {
  private appRef = document.querySelector(APP);
  
  renderApp() {
    this.appRef.insertAdjacentHTML('beforeend', header.render())
  }
}


new AppRenderer().renderApp();