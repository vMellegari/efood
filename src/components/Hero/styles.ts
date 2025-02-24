import styled from 'styled-components'
import fundo from '../../assets/images/fundo.svg'

export const HeroContainer = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${fundo});
`

export const Branding = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
`
export const Slogan = styled.h4`
  font-weight: bold;
  font-size: 36px;
  max-width: 539px;
  text-align: center;
  margin-bottom: 40px;
`
