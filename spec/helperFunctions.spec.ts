import { capitalize } from "../src/helpers/helperFunctions"


describe('Test Suite for helper functions', () => {
  
  test('capitalize capitalizes strings', () => {
    expect(capitalize('bulbasaur')).toBe('Bulbasaur');
  })
  
  test('return emtpy string if emtpy string is provided as argument', () => {
    expect(capitalize('')).toBe('');
  })
})