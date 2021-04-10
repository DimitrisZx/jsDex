import { Component } from "../../helpers/component";
import './style.scss'
export class Header extends Component {
  
  constructor() {
    super();
  }

  render(): string {
    return (
      `<header class="nav-bar nav">
        <div>Pokedex</div>
      </header>
    `);
  }
}
