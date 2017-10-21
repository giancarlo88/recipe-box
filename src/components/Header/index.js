import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  align-items: center;
  background-color: rgba(125, 30, 50, .5);
  display: flex;
  height: 75px;
  justify-content: center;
  text-align: center;
`

const StyledHeaderTitle = styled.h1`
  font-family: 'Montserrat';
  font-size: 36px;
`

const Header = ({ text }) => (
  <StyledHeader>
    <StyledHeaderTitle>{text}</StyledHeaderTitle>
  </StyledHeader>
)

export default Header
