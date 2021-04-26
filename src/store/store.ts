import { Component } from '../helpers/component';
import { Payload } from '../helpers/payload.class';
import { PokedexService } from '../services/pokedex.service';

export class Store {
  private state: AppState;
  private subscribers: Component[] = [];

  public getSubscribers(): Component[] {
    return this.subscribers;
  }

  constructor(initState = {}, private pokedexService = new PokedexService()) {
    this.state = { ...initState, currentPokemon: {} };
  }

  public async makeAsyncCall(endpoint: string, value: string): Promise<void> {
    let callResult: any;
    switch (endpoint) {
      case 'getPokemonByName':
        callResult = await this.pokedexService.getPokemonByName(value);
        this.setState(new Payload('currentPokemon', callResult));
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
}
