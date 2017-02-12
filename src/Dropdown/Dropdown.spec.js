import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Dropdown from './Dropdown'

describe('component: Dropdown', () => {
  it('component should render once', () => {
    const wrapper = mount(<Dropdown />)
    console.log(wrapper.debug())
    const instance = wrapper.instance()
    const didRender = sinon.spy(instance, 'render')
    instance.render()
    expect(didRender.callCount).to.equal(1)
  })
})

