import { Component } from "../helpers/component";
import './style.scss'
export class Header extends Component {

  render(): string {
    return (
      `<header class="nav-bar"}>
        <div>Pokedex</div>
      </header>
    `);
  }
}
