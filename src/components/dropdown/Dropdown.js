import React, { Component, PropTypes } from 'react'
import { RippleButton } from '../ripplebutton/RippleButton'
import Arrow from '../arrow/Arrow'
import './styles.scss'

export class Dropdown extends Component {

  state = {
    isOpen: false
  }

  static propTypes = {
    arrowColor: PropTypes.string,
    elementCass: PropTypes.string
  }

  static defaultProps = {
    arrowColor: '#fff',
    elementClass: ''
  }

  handleClick = () => {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  render () {
    const { isOpen } = this.state
    return (
      <div className={`awsm-dropdown ${this.props.elementCass}`}>
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
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
            <li>item3</li>
            <li>item3</li>
            <li>item3</li>
            <li>item3</li>
          </ul>
        </div>
      </div>
    )
  }
}
