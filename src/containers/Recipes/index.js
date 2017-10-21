import React, { Component } from 'react'

import Recipe from '../../components/Recipe'

export default class Recipes extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      selectedRecipe: null
    }
  }

  handleRecipeClick = (index) => {
    this.setState((prevState) => {
      if (prevState.selectedRecipe !== index) {
        return { selectedRecipe: index }
      }
      return { selectedRecipe: null }
    })
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://www.ggalliani.com/test/recipes.json')
      const recipes = await res.json()
      this.setState({
        recipes
      })
    } catch (error) {
      throw error
    }
  }

  render() {
    return this.state.recipes.map((recipe, index) => (
      <Recipe
        key={index}
        index={index}
        recipe={recipe}
        isSelected={index === this.state.selectedRecipe}
        handleClick={(index) => this.handleRecipeClick(index)}
      />
    ))
  }
}
