import { Branding, HeaderStyle } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderStyle>
    <div className="container">
      <Branding href="/">
        <img src={logo} alt="Logo" />
      </Branding>
    </div>
  </HeaderStyle>
)

export default Header
