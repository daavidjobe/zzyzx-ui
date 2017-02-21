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
    styles: PropTypes.object
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

  handleClick = event => makeRipple(event, this.ripple, ANIMATION_CLASS_NAME)

  render () {
    return (
      <div className='awsm-ripple-btn'>
        <button
          onClick={this.handleClick}
          style={{
            backgroundColor: PRIMARY,
            color: '#fff',
            ...this.props.styles
          }}
        >
          {this.props.label}
        </button>
        <span
          style={{
            backgroundColor: this.props.rippleColor || '#fff'
          }}
          ref={ripple => { this.ripple = ripple }}
        />
      </div>
    )
  }
}
