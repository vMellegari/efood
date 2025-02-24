import { createGlobalStyle } from 'styled-components'

export const cores = {
  background: '#FFF8F2',
  background2: '#FFEBD9',
  branco: '#FFFFFF',
  vermelho: '#E66767',
  rosa: '#FFEBD9',
  amarelo: '#FFB930'
}

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background-color: ${cores.background};
    color: ${cores.vermelho};
  }
`
