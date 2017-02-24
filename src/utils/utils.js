export default (() => {
  const asPixels = value => `${value}px`

  const rippleEffect = ({ clientX, clientY }, targetEl, rippleEl) => {
    const {
      height, width, top, left
    } = targetEl.getBoundingClientRect()

    Object.assign(rippleEl.style, {
      top: asPixels(clientY - top - (height / 2)),
      left: asPixels(clientX - left - (width / 2)),
      height: asPixels(height),
      width: asPixels(width)
    })
    rippleEl.classList.add('ripple-effect')
  }

  return {
    asPixels,
    rippleEffect
  }
})()

