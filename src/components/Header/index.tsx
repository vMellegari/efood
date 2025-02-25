import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.svg'

import { Branding, LinkRestaurantes, TextCart } from './styles'
import { HeaderStyle } from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { pedido } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderStyle>
      <div className="container">
        <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
        <Branding href="/">
          <img src={logo} alt="Logo do restaurante" />
        </Branding>
        <TextCart onClick={openCart}>
          {pedido.length} produto(s) no carrinho
        </TextCart>
      </div>
    </HeaderStyle>
  )
}

export default Header
