import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { RippleButton } from './RippleButton'

describe('<RippleButton />', () => {
  it('should render once', () => {
    const wrapper = shallow(<RippleButton />)
    const instance = wrapper.instance()
    const didRender = sinon.spy(instance, 'render')
    instance.render()
    expect(didRender.callCount).to.equal(1)
  })

  it('should have expected liefecycle methods', () => {
    const instance = shallow(<RippleButton />)
      .instance()
    expect(typeof instance.componentDidMount === 'function').to.equal(true)
    expect(typeof instance.componentWillUnmount === 'function').to.equal(true)
  })

  it('should have event callback method', () => {
    const instance = shallow(<RippleButton />)
      .instance()
    expect(typeof instance.animationEnd === 'function').to.equal(true)
  })

  it('should have click handler', () => {
    const instance = shallow(<RippleButton />)
      .instance()
    expect(typeof instance.handleClick === 'function').to.equal(true)
  })
})

