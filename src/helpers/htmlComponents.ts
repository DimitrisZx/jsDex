export const ImageElement = (props: any): HTMLElement => {
  const { src: imageSrc, id, className, children } = props;
  const element = document.createElement('img');
  element.src = imageSrc;
  element.id = id || '';
  element.className = className || '';
  if (props?.children?.length > 0) {
    props.children.forEach((child: HTMLElement) => {
      element.appendChild(child)
    })
  }
  return element;
}