import { createGlobalStyle } from 'styled-components'

export const cores = {
  background: '#FFF8F2',
  background2: '#FFEBD9',
  branco: '#FFFFFF',
  vermelho: '#E66767',
  amarelo: '#FFB930'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '821px',
  mobile: '430px'
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
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
