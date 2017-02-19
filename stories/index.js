import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Dropdown from '../src/Dropdown/Dropdown'

storiesOf('<Dropdown />', module)
  .add('with text', () => (
    <Dropdown />
  ))
