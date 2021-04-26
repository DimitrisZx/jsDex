import { Component } from '../src/helpers/component';
import { Store } from '../src/store/store';
import { IInformable } from '../src/interfaces/informable.interface';
import { Payload } from '../src/helpers/payload.class';

let store = new Store();

class TestComponent extends Component implements IInformable {
  wasInformed = false;

  constructor(componentName: string, store: any) {
    super(componentName, store);
  }

  inform() {
    this.wasInformed = true;
  }
}

describe('Store object works', () => {
  beforeEach(() => {
    store = new Store();
  });

  test('State can be writted & read', () => {
    store.setStateSingle(new Payload('testKey', 'testValue'));
    expect(store.getStateValue('testKey')).toBe('testValue');
  });

  test('Store subscribes components to its subscribers list', () => {
    const testComponent = new TestComponent('TestComponent', store);
    const subscribedComponentName = store.subscribe(testComponent);
    expect(subscribedComponentName).toBe('TestComponent');
    expect(store.getSubscribers().length).toBe(1);
  });

  test('Store informs subscribers of changes in state', () => {
    const testComponent = new TestComponent('TestComponent', store);
    store.subscribe(testComponent);
    store.setStateSingle(new Payload('testKey', 'testValue'));
    expect(testComponent.wasInformed).toBe(true);
  });
});
