import React from 'react'
import { storiesOf } from '@kadira/storybook'
import RippleButton from '../src/RippleButton/RippleButton'

storiesOf('<RippleButton />', module)
  .add('with label only', () => (
    <RippleButton label='click me!' />
  ))
  .add('with custom ripple color', () => (
    <RippleButton label='click me!' rippleColor='red' />
  ))
  .add('inside container', () => {
    return (
      <div style={{position: 'relative', maxWidth: '240px'}}>
        <RippleButton rippleColor='red' label='click me!' />
      </div>
    )
  })
  .add('with custom styles', () => (
    <RippleButton
      label='click me!'
      styles={{color: '#000', backgroundColor: '#ccc'}}
    />
  ))
