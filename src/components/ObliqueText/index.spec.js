import React from 'react'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'

import ObliqueText from './'


describe('<ObliqueText />', () => {
  const text = 'Here is some oblique text'

  it('should match a snapshot', () => {
    const props = {
      text
    }
    const tree = create(<ObliqueText {...props} />)
    expect(tree).toMatchSnapshot()
  });


  it('should should render the text passed to it as a prop', () => {
    const component = mount(<ObliqueText text={text} />)
    expect(component.find('p').text()).toBe(text)
  });

});
