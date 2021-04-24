import { DOMHelper as d } from '../src/helpers/domHelper'

test('Create Element works as intented', () => {
  document.body.innerHTML = `<div id="app"></div>`;

  expect(d.createElement('div', {textContent: 'Hello!'}).outerHTML).toBe<string>('<div>Hello!</div>')
  expect(d.createElement('p', {class: 'paragraph'}).outerHTML).toBe<string>('<p class="paragraph"></p>')
  expect(d.createElement('', {class: 'paragraph'}).outerHTML).toBe<string>('<div></div>')
});

test('Append Children works as expected', () => {
  const parent = d.createElement('div', {});
  const children = [
    d.createElement('div', {id: 'child1'}),
    d.createElement('div', {id: 'child2'}),
    d.createElement('div', {id: 'child3'})
  ]
  expect(d.appendChildren(parent, ...children).innerHTML).toBe(
    '<div id="child1"></div><div id="child2"></div><div id="child3"></div>'
  );
})
