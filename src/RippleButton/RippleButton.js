import React, { Component, PropTypes } from 'react'
import './styles.scss'
export default class RippleButton extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    rippleColor: PropTypes.string,
    styles: PropTypes.object
  }

  componentDidMount () {
    const { elem } = this
    elem.addEventListener('animationend', this.animationEnd)
  }

  componentWillUnmount () {
    const { elem } = this
    elem.removeEventListener('animationend', this.animationEnd)
  }

  animationEnd = () => {
    this.elem.classList.remove('ripple-effect')
  }

  handleClick = event => {
    const bounds = event.target.getBoundingClientRect()
    Object.assign(this.elem.style, {
      top: `${event.clientY - bounds.top - (bounds.height / 2)}px`,
      left: `${event.clientX - bounds.left - (bounds.width / 2)}px`,
      height: `${bounds.height}px`,
      width: `${bounds.width}px`
    })
    this.elem.classList.add('ripple-effect')
  }

  render () {
    return (
      <div className='ripple-btn ripple'>
        <button className='ripple' onClick={this.handleClick}>
          {this.props.label}
        </button>
        <span
          style={{
            backgroundColor: this.props.rippleColor || '#fff'
          }}
          ref={elem => { this.elem = elem }}
        />
      </div>
    )
  }
}
