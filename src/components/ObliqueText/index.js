import React from 'react'
import styled from 'styled-components'

const StyledObliqueText = styled.p`
font-style: oblique;
font-size: 12px;
padding: 7.5px 0;
`

const ObliqueText = ({text}) => (
  <StyledObliqueText>
    {text}
  </StyledObliqueText>
)

export default ObliqueText
