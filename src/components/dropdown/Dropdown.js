import React, { Component } from 'react'
import { RippleButton } from '../ripplebutton/RippleButton'
import Arrow from '../arrow/Arrow'
import './styles.scss'

export class Dropdown extends Component {

  state = {
    isOpen: false
  }

  handleClick = () => {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  render () {
    const { isOpen } = this.state
    return (
      <div className='awsm-dropdown'>
        <div className='dropdown-btn'>
          <RippleButton onClick={this.handleClick}>
            <div>Dropdown</div>
            <Arrow
              elementClass={`arrow-${isOpen ? 'up' : 'down'}`}
              width={25}
              color='#fff'
            />
          </RippleButton>
        </div>
      </div>
    )
  }
}
