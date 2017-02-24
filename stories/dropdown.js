import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Dropdown } from '../src'

storiesOf('<Dropdown />', module)
  .add('simple dropdown', () => (
    <Dropdown />
  ))
