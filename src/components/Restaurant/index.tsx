import Button from '../Button'
import { reduceDescription } from '../Product'

import Star from '../../assets/images/estrela.svg'
import { Card, Photo, Title, Description, Rate, Categories } from './styles'

type Props = {
  RestaurantTitle: string
  RestaurantRate: number
  RestaurantDetails: string
  RestaurantPhoto: string
  RestaurantCategories: string[]
  RestaurantToLink: string
}

const Restaurant = ({
  RestaurantTitle,
  RestaurantRate,
  RestaurantDetails,
  RestaurantPhoto,
  RestaurantCategories,
  RestaurantToLink
}: Props) => {
  return (
    <Card>
      <Photo src={RestaurantPhoto} alt="" />
      <Categories>
        {RestaurantCategories.map((info) => {
          if (info) {
            return <Button key={info}>{info}</Button>
          }
        })}
      </Categories>
      <div className="ContainerTop">
        <Title>{RestaurantTitle}</Title>
        <Rate>
          <h3>{RestaurantRate}</h3>
          <img src={Star} alt="Estrela" />
        </Rate>
      </div>
      <Description>{reduceDescription(RestaurantDetails)}</Description>
      <Button type="link" to={RestaurantToLink}>
        Saiba mais
      </Button>
    </Card>
  )
}

export default Restaurant
