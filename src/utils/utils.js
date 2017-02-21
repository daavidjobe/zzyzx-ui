
export const asPixels = value => `${value}px`

export const makeRipple = ({ target, clientX, clientY }, element, className) => {
  const {
    height, width, top, left
  } = target.getBoundingClientRect()

  Object.assign(element.style, {
    top: asPixels(clientY - top - (height / 2)),
    left: asPixels(clientX - left - (width / 2)),
    height: asPixels(height),
    width: asPixels(width)
  })
  element.classList.add(className)
}
