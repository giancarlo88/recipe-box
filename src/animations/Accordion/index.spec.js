import React from 'react'
import { create } from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import Accordion from '.'

function createNodeMock(element) {
  console.log(element)
  if (element.type === 'div') {
    return {
      scrollHeight: 100
    }
  }
}

describe('<Accordion /> HOC', () => {
  const initialHeight = 100
  class MockComponent extends React.Component {
    render() {
      return <div className='mock' ref={(elem) => (this.element = elem)}>Mock</div>
    }
  }

  it('should match snapshot', () => {
    const WrappedComponent = Accordion(MockComponent)
    const wrapper = mount(<WrappedComponent />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should pass the initialHeight down to the rendered child', () => {
    const WrappedComponent = Accordion(MockComponent, 100)
    const wrapper = mount(<WrappedComponent />)
    expect(wrapper.childAt(0).height).toBe(initialHeight)
  })
})
