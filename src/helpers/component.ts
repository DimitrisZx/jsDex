import { IComponent } from "../interfaces/component.interface";
import { Store } from "../store/store";

export class Component implements IComponent {

  componentName: string;
  render(): HTMLElement | string {return ''}
  attachListeners():void {return;};
  
  constructor(
    protected store?: Store
  ){}
}
