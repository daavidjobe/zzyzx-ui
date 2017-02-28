import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Dropdown } from './Dropdown'

const clickMock = {
  stopPropagation: () => {}
}

describe('<Dropdown />', () => {
  it('should render once', () => {
    const wrapper = shallow(<Dropdown />)
    const instance = wrapper.instance()
    const didRender = sinon.spy(instance, 'render')
    instance.render()
    expect(didRender.callCount).to.equal(1)
  })
  it('should arrow with class "arrow-down" as default', () => {
    const wrapper = shallow(<Dropdown />)
    const arrowClass = wrapper.find('Arrow').prop('elementClass')
    expect(arrowClass).to.equal('arrow-down')
  })
  it('should toggle dropdown on click', () => {
    const wrapper = shallow(<Dropdown />)
    let arrowClass = wrapper.find('Arrow').prop('elementClass')
    expect(arrowClass).to.equal('arrow-down')
    wrapper.find('RippleButton').simulate('click', clickMock)
    arrowClass = wrapper.find('Arrow').prop('elementClass')
    expect(arrowClass).to.equal('arrow-up')
    expect(wrapper.state().isOpen).to.equal(true)
  })
})

