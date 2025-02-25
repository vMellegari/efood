import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import FoodList from '../../components/ProductList'
import Footer from '../../components/Footer'
import { useGetRestaurantSelectedQuery } from '../../services/api'
import Loader from '../../components/Loader'
import Banner from '../../components/Banner'
import Cart from '../../components/Cart'

type RestaurantParams = {
  id: string
}

const Produtos = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurantFood } = useGetRestaurantSelectedQuery(id)

  if (restaurantFood) {
    return (
      <div id="root">
        <div className="main-content">
          <Header />
          <Banner restaurant={restaurantFood} />
          <FoodList
            restaurant={restaurantFood}
            pedido={{
              id: 0,
              nome: '',
              foto: '',
              preco: 0
            }}
          />
          <Footer />
        </div>
        <Cart />
      </div>
    )
  }
  return <Loader />
}

export default Produtos
