import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import RippleButton from './RippleButton'

const minProps = {
  label: 'click me!'
}

describe('<RippleButton />', () => {
  it('should render once', () => {
    const wrapper = shallow(<RippleButton {...minProps} />)
    const instance = wrapper.instance()
    const didRender = sinon.spy(instance, 'render')
    instance.render()
    expect(didRender.callCount).to.equal(1)
  })

  it('should have expected liefecycle methods', () => {
    const instance = shallow(<RippleButton {...minProps} />)
      .instance()
    expect(typeof instance.componentDidMount === 'function').to.equal(true)
    expect(typeof instance.componentWillUnmount === 'function').to.equal(true)
  })

  it('should have event callback method', () => {
    const instance = shallow(<RippleButton {...minProps} />)
      .instance()
    expect(typeof instance.animationEnd === 'function').to.equal(true)
  })

  it('should have click handler', () => {
    const instance = shallow(<RippleButton {...minProps} />)
      .instance()
    expect(typeof instance.handleClick === 'function').to.equal(true)
  })

  it('should have rendered label', () => {
    const wrapper = shallow(<RippleButton {...minProps} />)
    expect(wrapper.find('button').text()).to.equal('click me!')
  })
})

