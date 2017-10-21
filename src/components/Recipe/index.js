import React from 'react'
import styled from 'styled-components'

import Accordion from '../../animations/Accordion'
import ObliqueText from '../ObliqueText'
import RecipeTitle from '../RecipeTitle'

const StyledRecipe = styled.div`
  background-color: #247ba0;
  color: #c9daea;
  padding: 15px;
  transition: height .2s ease-in;
  overflow: hidden;
`

const Recipe = ({ handleClick, isSelected, recipe, index }) => (
  <Accordion initialHeight={95} isSelected={isSelected}>
    <StyledRecipe onClick={() => handleClick(index)}>
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
      <br />
      <p>{recipe.notes}</p>
    </StyledRecipe>
  </Accordion>
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
