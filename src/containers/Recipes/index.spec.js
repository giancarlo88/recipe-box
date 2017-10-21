import React from 'react'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'

import Recipes from '.'
import Recipe from '../../components/Recipe'

describe('<Recipes />', () => {
  const recipes = [
    {
      title: 'Test recipe 1',
      servings: 4,
      ingredients: [
        {
          quantity: 1,
          unit: 'cup',
          ingredient: 'flour'
        }
      ],
      description: 'A test recipe',
      notes: 'It tastes like Mocha.'
    }
  ]

  fetch.mockResponse(JSON.stringify(recipes))

  beforeEach(() => {
    jest.resetModules()
  })

  const mockRender = async () => {
    const component = mount(<Recipes />)
    await component.instance().componentDidMount()
    component.update()
    return component
  }

  it('should match a snapshot', async () => {
    const tree = create(<Recipes />)
    await tree.getInstance().componentDidMount()
    expect(tree).toMatchSnapshot()
  })

  it('should pass props to the Recipe component', async () => {
    const component = await mockRender()
    const child = component.find(Recipe)
    expect(child.props().index).toBe(0)
    expect(child.props().recipe).toEqual(recipes[0])
    expect(child.props().isSelected).toBe(false)
  })

  it('should update the isSelected index when one of the recipes are clicked', async () => {
    const component = await mockRender()
    expect(component.state().selectedRecipe).toBe(null)
    const child = component.find(Recipe)
    child.simulate('click')
    expect(component.state().selectedRecipe).toBe(0)
    expect(component.find(Recipe).props().isSelected).toBe(true)
  })
})
