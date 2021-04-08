import './style.scss';
import { Component } from '../../helpers/component';

export class Footer extends Component {
  render(): string {
    return (
      `
      <footer>
        <div class="footer">This is the footer</div>
      </footer>
      `
    )
  }
}