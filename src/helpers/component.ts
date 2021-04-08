import { IComponent } from "../interfaces/component.interface";

export abstract class Component implements IComponent {

  abstract render(): string
}
