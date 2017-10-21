import Recipe from './'
import React from 'react'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'

import RecipeTitle from '../RecipeTitle'
import ObliqueText from '../ObliqueText'



describe('<Recipe />', () => {
  const title = 'Test recipe'
  const servings = 3
  const ingredients = [
    {
      quantity: 1,
      unit: 'cup',
      ingredient: 'flour'
    }
  ]
  const description = 'Here is my test recipe'

  const recipe = {
    title,
    servings,
    ingredients,
    description
  }
  it('should match snapshot', () => {
    const props = {
      recipe
    }
    const tree = create(<Recipe {...props} />)
    expect(tree).toMatchSnapshot()
  })

  it('should render the recipe passed to it from props', () => {
    const component = mount(<Recipe recipe={recipe} />)
    expect(component.find(RecipeTitle).props().text).toBe(title)
    expect(component.find(ObliqueText).props().text).toBe(`Serves ${servings}`)
    expect(component.find('li').text()).toBe(`${ingredients[0].quantity} ${ingredients[0].unit} ${ingredients[0].ingredient}`)
    expect(component.find('p').at(1).text()).toBe(description)
  })
})
