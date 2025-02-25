import { useState } from 'react'
import Product from '../Restaurant'
import Loader from '../Loader'
import { Restaurant } from '../../types'
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
  isLoading?: boolean
}

const ProductList = ({ restaurants, isLoading }: Props) => {
  const [destaque] = useState('Destaque da semana')

  if (isLoading) {
    return <Loader />
  }
  return (
    <Container className="container">
      <List>
        {restaurants.map((restaurants) => (
          <Product
            key={restaurants.id}
            RestaurantTitle={restaurants.titulo}
            RestaurantRate={restaurants.avaliacao}
            RestaurantDetails={restaurants.descricao}
            RestaurantPhoto={restaurants.capa}
            RestaurantCategories={[
              restaurants.tipo,
              restaurants.destacado ? destaque : ''
            ]}
            RestaurantToLink={`/restaurant/${restaurants.id}`}
          />
        ))}
      </List>
    </Container>
  )
}

export default ProductList
