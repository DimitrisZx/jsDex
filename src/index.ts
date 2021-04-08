import './styles.scss';
import { Header } from './components/header/header.component';
import { APP } from './constants';
import { Footer } from './components/footer/footer.component';
import { Content } from './components/content/content.component';


class AppRenderer {
  private appRef = document.querySelector(APP);
  
  renderApp() {
    this.appRef.insertAdjacentHTML('beforeend', 
      `
        ${new Header().render()}
        ${new Content().render()}
        ${new Footer().render()}
      `)
  }
}


new AppRenderer().renderApp();