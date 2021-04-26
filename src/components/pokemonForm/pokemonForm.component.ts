import { QUERY_FORM, ROOT_ELEMENT } from '../../constants';
import { Component } from '../../helpers/component';
import { DOMHelper as d } from '../../helpers/domHelper';

export class PokemonForm extends Component {
  render(): HTMLElement | string {
    const form = d.createElement('form', {});
    const label = d.createElement('label', {
      class: 'form-label',
      for: 'poke-name',
      textContent: 'Pokemon Name',
    });
    const input = d.createElement('input', {
      class: 'form-control',
      type: 'text',
      id: 'poke-name',
      name: 'poke-name',
      value: '',
    });
    const button = d.createElement('button', {
      class: 'btn btn-primary mt-2 mb-4',
      textContent: 'Click',
    });

    const finalElement = d.appendChildren(form, label, input, button);

    document.querySelector(QUERY_FORM).appendChild(finalElement);
    button.addEventListener('click', (e) => {
      e.preventDefault();
      this.store.makeAsyncCall('getPokemonByName', (<HTMLInputElement>input).value);
    });
    return '';
  }
}
