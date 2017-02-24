import React, { Component, PropTypes } from 'react'
import { PRIMARY } from '../../utils/colors'
import { ANIMATION_END } from '../../utils/events'
import utils from '../../utils/utils'

import './styles.scss'

export class RippleButton extends Component {

  static propTypes = {
    rippleColor: PropTypes.string,
    styles: PropTypes.object,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    onClick: () => {},
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

  handleClick = event => {
    this.ripple.classList.remove('ripple-effect')
    utils.rippleEffect(event, this.btn, this.ripple)
    this.props.onClick(event)
  }

  animationEnd = () => this.ripple.classList.remove('ripple-effect')

  render () {
    const { type, styles, rippleColor, disabled } = this.props
    return (
      <div className='awsm-ripple-btn'>
        <button
          ref={btn => { this.btn = btn }}
          type={type}
          disabled={disabled}
          onClick={this.handleClick}
          style={{
            backgroundColor: PRIMARY,
            color: '#fff',
            ...styles
          }}
        >
          {this.props.children}
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
