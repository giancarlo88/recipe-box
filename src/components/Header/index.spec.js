import React from 'react'
import Header from './index'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'

describe('Header', () => {
  const text = 'Header'

  it('should match a snapshot', () => {
    const props = {
      text
    }
    const tree = create(<Header {...props} />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the text prop passed to it', () => {
    const component = mount(<Header text={text} />)
    expect(component.find('h1').text()).toBe(text)
  })
})
