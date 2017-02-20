import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Dropdown from './Dropdown'

describe('component: Dropdown', () => {
  it('component should render once', () => {
    const wrapper = shallow(<Dropdown />)
    const instance = wrapper.instance()
    const didRender = sinon.spy(instance, 'render')
    instance.render()
    expect(didRender.callCount).to.equal(1)
  })
})

