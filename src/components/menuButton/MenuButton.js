import React from 'react'
import styled from 'styled-components'


function MenuButton( { color, name, checkScore, score } ) {

  return (
  <Button onClick={checkScore ? () => checkScore(score) : null} color={color}>
<Span>
    {name}
</Span>

  </Button>
  )
}

export default MenuButton





const Button = styled.div  `
border-radius: 10px;
background-color: ${props => (props.color)};
padding: 20px 20px;
margin-top: 30px;
width: 80%;
display: flex;
align-items: center;
justify-content: center;
margin-left: auto;
margin-right: auto;
cursor: pointer;
`

const Span = styled.span `
color: #fff;
text-decoration: none;
text-transform: uppercase;
`