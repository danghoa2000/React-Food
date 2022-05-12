import { useReducer, useState } from "react";
import Banner from "./components/Banner";
import CartProduct from "./components/CartProduct";
import { Items } from "./components/data";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ProductList from "./components/ProductList";

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        cart: action.cart,
      }
    default:
      break;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, { cart: []})
  const [isMainData, setMainData] = useState(() => (
    Items.filter((item) => (item.itemId === 'buger01'))
  ))

  const setData = (itemId) => {
    setMainData(Items.filter(item => item.itemId === itemId))
  }

  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <Banner />
            <Menu onSetData={setData} />
            <ProductList dispatch={dispatch} cart={state.cart} products={isMainData} />
          </div>
          <div className="col-4">
            <CartProduct cart={state.cart} dispatch={dispatch}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
