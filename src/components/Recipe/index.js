import React from 'react'
import styled from 'styled-components'

const Recipe = styled.div`
  background-color: #247ba0;
  color: #C9DAEA;
  height: ${(props) => (props.isSelected ? '400px' : '200px')};
  padding: 15px;
  transition: height .2s ease-in;
`

const ObliqueText = styled.p`
  font-style: oblique;
  font-size: 12px;
  padding: 7.5px 0;
`

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
  padding: 15px 0;
`
export default ({ handleClick, isSelected, recipe = {}, index }) => (
  <Recipe isSelected={isSelected} onClick={() => handleClick(index)}>
    <Title>{recipe.title}</Title>
    <ObliqueText>Serves {recipe.servings}</ObliqueText>
    <ul>
      {recipe.ingredients.map((ingredient, ingredientIndex) => (
        <li key={ingredientIndex}>
          {ingredient.quantity} {ingredient.unit} {ingredient.ingredient}
        </li>
      ))}
    </ul>
    <br />
    <p>{recipe.description}</p>
  </Recipe>
)
