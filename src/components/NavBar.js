import React from 'react'
import styled from 'styled-components'

const NavBar = styled.nav`
  height: 70px
  background-color: white
  padding: 0 30px
  display: flex
  align-items: center
  margin-bottom: 40px
  a:active, a:hover {
    text-decoration: none
  }
  
  border-bottom: 1px solid grey
`

export default ({style={}, children}) => {
  return (
    <NavBar style={style}>
      { children }
    </NavBar>
  )
}