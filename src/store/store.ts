import { ROOT_ELEMENT } from '../constants';
import { Component } from '../helpers/component';
import { capitalize } from '../helpers/helperFunctions';
import { Payload } from '../helpers/payload.class';
import { View } from '../helpers/view.class';
import { PokedexService } from '../services/pokedex.service';
import { availableViews } from './availableViews';

export class Store {
  private state: AppState;
  private subscribers: Component[] = [];
  private availableViews: View[] = availableViews;

  public getSubscribers(): Component[] {
    return this.subscribers;
  }

  constructor(
    initState = {},
    private pokedexService = new PokedexService(),
    private viewController = new ViewController(),
  ) {
    this.state = { ...initState, currentPokemon: {} };
  }

  public async makeAsyncCall(endpoint: string, value: string): Promise<void> {
    let callResult: any;
    switch (endpoint) {
      case 'getPokemonByName':
        callResult = await this.pokedexService.getPokemonByName(value);
        this.setStateSingle(new Payload('currentPokemon', callResult));
        console.log(this.state);
        break;
      default:
        console.warn('No state was changed!');
        break;
    }
  }

  private mutateState(key: string, value: string): void {
    if (key && value) {
      this.state[key] = value;
    }
  }

  public setStateSingle(payload: Payload): void {
    this.mutateState(payload.key, payload.data);
    this.informSubscribers();
  }

  public setState(payload: Payload): void {
    this.mutateState(Object.keys(payload.data)[0], payload.data);
    this.informSubscribers();
  }

  public getStateValue(itemKey: string): any {
    return this.state[itemKey];
  }

  private informSubscribers(): void {
    this.subscribers.forEach((subscriber: any) => subscriber.inform({ ...this.state }));
  }

  public subscribe(subscriber: Component): string {
    this.subscribers.push(subscriber);
    return subscriber.componentName;
  }

  public changeView(viewName: string): void {
    const nextView = this.availableViews
      .find((view) => view.type === viewName)
      .template({
        pokemonName: this.state.currentPokemon.name,
        stats: this.state.currentPokemon.stats,
      });
    console.log(nextView);

    this.viewController.setView(nextView);
  }
}

class ViewController {
  private currentView: HTMLElement = null;
  public getCurrentView(): HTMLElement {
    return this.currentView;
  }

  public setView(viewString: string): void {
    this.showSingleElement(viewString);
  }

  private showSingleElement(elementToShowString: string): void {
    document
      .querySelectorAll('[data-view-active="true"]')
      .forEach((el) => this.hideElement(<HTMLElement>el));
    document.querySelector(ROOT_ELEMENT).insertAdjacentHTML('afterbegin', elementToShowString);
  }

  private hideElement(element: HTMLElement): void {
    element.setAttribute('data-view-active', 'false');
  }

  private showElement(element: HTMLElement): void {
    element.setAttribute('data-view-active', 'true');
  }

  private showDefaultView(): void {
    this.showElement(document.querySelector('[data-default-view]'));
  }
}
