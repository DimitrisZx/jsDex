import {Store} from '../src/store/store';

let store = new Store();

describe('Store object works', () => {
  beforeEach(() => {
    store = new Store();
  })

  test('State mutates correctly', () => {
    store.setState({type: 'testEntry', data: 'test'});
    expect(store.getStateValue('testEntry')).toBe('test');
  })
})
