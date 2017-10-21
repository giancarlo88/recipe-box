import React from 'react'
import styled from 'styled-components'

import ObliqueText from '../ObliqueText'
import RecipeTitle from '../RecipeTitle'

const StyledRecipe = styled.div`
  background-color: #247ba0;
  color: #C9DAEA;
  height: ${(props) => (props.isSelected ? '400px' : '200px')};
  padding: 15px;
  transition: height .2s ease-in;
`

const Recipe = ({ handleClick, isSelected, recipe, index}) => (
  <StyledRecipe isSelected={isSelected} onClick={() => handleClick(index)}>
    <RecipeTitle text={recipe.title} />
    <ObliqueText text={`Serves ${recipe.servings}`} />
    <ul>
      {recipe.ingredients.map((ingredient, ingredientIndex) => (
        <li key={ingredientIndex}>
          {ingredient.quantity} {ingredient.unit} {ingredient.ingredient}
        </li>
      ))}
    </ul>
    <br />
    <p>{recipe.description}</p>
  </StyledRecipe>
)

Recipe.defaultProps = {
  recipe: {
    title: '',
    servings: 0,
    ingredients: [],
    description: ''
  }
}

export default Recipe
