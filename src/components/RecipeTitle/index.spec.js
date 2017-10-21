import React from 'react'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'

import RecipeTitle from '.'

describe('<RecipeTitle />', () => {
  const text = 'My recipe'
  it('should match a snapshot', () => {
    const props = {
      text
    }
    const tree = create(<RecipeTitle {...props} />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the text it receives as a prop', () => {
    const component = mount(<RecipeTitle text={text} />)
    expect(component.find('h2').text()).toBe(text)
  })
})
