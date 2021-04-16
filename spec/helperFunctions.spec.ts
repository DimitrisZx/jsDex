import { capitalize } from "../src/helpers/helperFunctions"


describe('test suite for helper functions', () => {
  
  test('capitalize capitalizes strings', () => {
    expect(capitalize('bulbasaur')).toBe('Bulbasaur');
  })
  
  test('return emtpy string if emtpy string is provided as argument', () => {
    expect(capitalize('')).toBe('');
  })
})