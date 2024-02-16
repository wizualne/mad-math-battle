import React from 'react'
import { styled } from 'styled-components'

function Score({ score }) {
  return (
    <Div>
      Score: {score}
    </Div>
  )
}

export default Score


const Div = styled.div `
  margin-bottom: 30px;
  margin-top: 30px;
`