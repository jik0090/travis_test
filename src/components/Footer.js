import React from 'react';
import styled from 'styled-components'


const Footer = styled.footer`
  position: absolute
  bottom: 0
  height: 100px
  padding: 0 30px
  width: 100%
  box-sizing: border-box
`

const FooterBox = styled.div`
  ${font.Text}
  border-top: 1px solid red
  height: 200px

  display: flex
  align-items: center

  span {
    padding-left: 30px
  }
`

export default ({style={}}) => {
  return (
    <Footer style={style}>
      <FooterBox opacity="6">
        <span>
          © 2019 linewalks. All rights reserved.
        </span>
      </FooterBox>
    </Footer>
  )
}