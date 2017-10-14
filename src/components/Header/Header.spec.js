import React from 'react'
import Header from './Header'
import { create } from 'react-test-renderer'


describe('Header', () => {

  it('should match a snapshot', () => {
    const tree = create(<Header/>)
    expect(tree).toMatchSnapshot()
  });

});
