import React, { Component, PropTypes } from 'react'
import { RippleButton } from '../ripplebutton/RippleButton'
import Arrow from '../arrow/Arrow'
import './styles.scss'

// TODO: Make items searchable

export class Dropdown extends Component {

  state = {
    isOpen: false
  }

  static propTypes = {
    items: PropTypes.array,
    arrowColor: PropTypes.string,
    elementCass: PropTypes.string,
    open: PropTypes.bool
  }

  static defaultProps = {
    items: [],
    arrowColor: '#fff',
    elementClass: ''
  }

  componentWillMount = () => {
    window.addEventListener('click', this.close)
  }

  componentWillUnmount = () => {
    window.removeEventListener('click', this.close)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.open) {
      this.setState({ isOpen: newProps.open })
    }
  }

  close = event => {
    if (!this.hovering) {
      this.setState({ isOpen: false })
    }
  }

  handleKeyDown = ({ key }) => {
    if (key === 'Escape') {
      this.hovering = false
      this.close()
    }
  }

  handleClick = event => {
    event.stopPropagation()
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  handleMouseOver = () => {
    this.hovering = true
  }

  handleMouseLeave = () => {
    this.hovering = false
  }

  render () {
    const { isOpen } = this.state
    const { items } = this.props
    return (
      <div
        onKeyDown={this.handleKeyDown}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        className={`awsm-dropdown ${this.props.elementCass}`}
      >
        <div className='dropdown-btn'>
          <RippleButton onClick={this.handleClick}>
            <div>Dropdown</div>
            <Arrow
              elementClass={`arrow-${isOpen ? 'up' : 'down'}`}
              width={25}
              color={this.props.arrowColor}
            />
          </RippleButton>
        </div>
        <div className={`dropdown-list ${isOpen ? 'slide-down' : 'slide-up'}`}>
          <ul>
            { items.map((item, index) => <li key={index}>{item}</li>) }
          </ul>
        </div>
      </div>
    )
  }
}
