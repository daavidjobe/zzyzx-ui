import React, { Component } from 'react'
import { RippleButton } from '../ripplebutton/RippleButton'
import Arrow from '../arrow/Arrow'
import './styles.scss'

export class Dropdown extends Component {

  state = {
    isOpen: false
  }

  render () {
    return (
      <div className='awsm-dropdown'>
        <RippleButton>
          <div>Dropdown</div>
          <Arrow width={15} color='#fff' />
        </RippleButton>
      </div>
    )
  }
}
