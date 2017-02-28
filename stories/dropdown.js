import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Dropdown } from '../src'

const items = [
  <div>item1</div>,
  <div>item2</div>,
  <div>item3</div>
]

storiesOf('<Dropdown />', module)
  .add('simple dropdown', () => (
    <Dropdown items={items} />
  ))
  .add('with multiple', () => (
    <div>
      <Dropdown items={items} />
      <Dropdown items={items} />
    </div>
  ))
