export const capitalize = (str: string): string =>
  str.length > 0 ? str[0].toUpperCase() + str.slice(1) : '';

export const mapToHtml = (arr: any) => {
  const list = document.createElement('ul');
  arr.forEach((arrayElement: any) => {
    const currentChild = document.createElement('li');
    currentChild.textContent = arrayElement;
    list.appendChild(currentChild);
  });
  return list.outerHTML;
};
