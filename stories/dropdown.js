import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Dropdown, RippleButton } from '../src'

const items = [
  <div>item1</div>,
  <div>item2</div>,
  <div>item3</div>
]

const items2 = [
  <RippleButton>item1</RippleButton>,
  <RippleButton>item2</RippleButton>,
  <RippleButton>item3</RippleButton>
]

storiesOf('<Dropdown />', module)
  .add('simple dropdown', () => (
    <Dropdown items={items} />
  ))
  .add('multiple', () => (
    <div>
      <Dropdown items={items} />
      <Dropdown items={items} />
    </div>
  ))
  .add('with RippleButtons in list', () => (
    <Dropdown items={items2} />
  ))
  .add('open as default', () => (
    <Dropdown items={items2} open={true} />
  ))
