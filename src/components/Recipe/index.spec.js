import Recipe from './index'
import React from 'react'
import { create } from 'react-test-renderer'

describe('<Recipe />', () => {

  it('should match snapshot when there are no recipes passed from props', () => {
    const tree = create(<Recipe />)
    expect(tree).toMatchSnapshot()
  });


  it('should match snapshot when there is a recipe passed from props', () => {
    const recipes = {
      title: 'Test Recipe',
    servings: 3,
    ingredients: [
        {
          quantity: 1,
          unit: 'cup',
          ingredient: 'flour'
        }
      ],

    }
    const tree = create(<Recipe recipes={recipes} />)
    expect(tree).toMatchSnapshot()
  });


});

