import React, { Component, PropTypes } from 'react'
import { PRIMARY } from '../utils/colors'
import { ANIMATION_END } from '../utils/events'
import { makeRipple } from '../utils/utils'

import './styles.scss'

const ANIMATION_CLASS_NAME = 'ripple-effect'

export default class RippleButton extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    rippleColor: PropTypes.string,
    styles: PropTypes.object,
    onTap: PropTypes.func,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    onTap: () => {},
    type: 'button',
    rippleColor: '#fff',
    disabled: false
  }

  componentDidMount = () =>
    this.ripple.addEventListener(
      ANIMATION_END,
      this.animationEnd
    )

  componentWillUnmount = () =>
    this.ripple.removeEventListener(
      ANIMATION_END,
      this.animationEnd
    )

  animationEnd = () => this.ripple.classList.remove(ANIMATION_CLASS_NAME)

  handleClick = event => {
    this.ripple.classList.remove(ANIMATION_CLASS_NAME)
    makeRipple(event, this.ripple, ANIMATION_CLASS_NAME)
    this.props.onTap(event)
  }

  render () {
    const { type, styles, rippleColor, label, disabled } = this.props
    return (
      <div className='awsm-ripple-btn'>
        <button
          type={type}
          disabled={disabled}
          onClick={this.handleClick}
          style={{
            backgroundColor: PRIMARY,
            color: '#fff',
            ...styles
          }}
        >
          {label}
        </button>
        <span
          style={{
            backgroundColor: rippleColor
          }}
          ref={ripple => { this.ripple = ripple }}
        />
      </div>
    )
  }
}
