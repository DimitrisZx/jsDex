import { Component } from "../../helpers/component";
import './style.scss'
export class Header extends Component {
  
  constructor() {
    super();
  }

  render(): string {
    return (
      `<ul class="nav">
        <li class='nav-item'>Pokedex</li>
      </ul>
    `);
  }
}
