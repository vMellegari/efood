import logo from '../../assets/images/logo.svg'
import { Branding, HeroContainer, Slogan } from './styles'

const Hero = () => (
  <HeroContainer>
    <Branding src={logo} alt="Logo do efood" />
    <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
  </HeroContainer>
)
export default Hero
