import styled from 'styled-components'
import fundo from '../../assets/images/fundo.svg'

export const HeaderStyle = styled.header`
  background-image: url(${fundo});
  align-items: center;
  text-align: center;

  .container {
    padding: 39px 0;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
`

export const Branding = styled.a`
  max-width: 126px;
  width: 100%;
  height: 60px;
`
