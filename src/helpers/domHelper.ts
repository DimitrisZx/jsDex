export class DOMHelper {
  static createElement(type: string, attributes?: HTMLAttributes):HTMLElement {
    const newElement = document.createElement(type);
    for (const attribute in attributes) {
      if (attribute === 'textContent') {
        newElement.textContent = attributes[attribute];
      } else {
        newElement.setAttribute(attribute, attributes[attribute]);
      }
    }
    return newElement;
  }

  static appendChildren(parent: HTMLElement, ...children: Array<HTMLElement>): HTMLElement {
    const parentClone = parent.cloneNode();
    children.forEach((element: HTMLElement) => {
      parentClone.appendChild(element)
    });
    return <HTMLElement> parentClone;
  }
}