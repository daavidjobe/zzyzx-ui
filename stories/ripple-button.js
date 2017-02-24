import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { RippleButton } from '../src'

storiesOf('<RippleButton />', module)
  .add('with label only', () => (
    <RippleButton>click me!</RippleButton>
  ))
  .add('with custom ripple color', () => (
    <RippleButton rippleColor='red'>click me!</RippleButton>
  ))
  .add('inside container', () => {
    return (
      <div style={{position: 'relative', maxWidth: '240px'}}>
        <RippleButton rippleColor='red'>click me!</RippleButton>
      </div>
    )
  })
  .add('with custom styles', () => (
    <RippleButton
      styles={{color: '#000', backgroundColor: '#ccc'}}
    >CLICK ME!</RippleButton>
  ))
