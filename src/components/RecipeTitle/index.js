import React from 'react'
import styled from 'styled-components'

const StyledRecipeTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
  padding: 15px 0;
`

const RecipeTitle = ({ text }) => <StyledRecipeTitle>{text}</StyledRecipeTitle>

export default RecipeTitle
