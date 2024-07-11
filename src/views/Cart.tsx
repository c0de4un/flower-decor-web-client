import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer.ts';
import { CartState } from '../redux/cartReducer.ts';
import Row from '../comps/layouts/Row.tsx';
import Col from '../comps/layouts/Col.tsx';
import UmbrellaSpinner from '../comps/spinners/UmbrellaSpinner.tsx';
import { getRandom } from '../math/Random.ts';
import CartItem from '../models/CartItem.ts';

class CartViewState {
  public isInitializing: boolean = false
}
const cartViewState = new CartViewState();

export default function Cart() {
  const [isBusy, setBusy] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartState: CartState = useSelector((state: RootState) => state.cart);

  const fetchItems = () => {
    setBusy(true);

    setTimeout(() => {
      setBusy(false);
      cartViewState.isInitializing = false;

      setCartItems([...cartState.items]);
    }, getRandom(500, 2500));
  };

  useEffect(() => {
    if (cartViewState.isInitializing) {
      return;
    }
    cartViewState.isInitializing = true;

    fetchItems();
  }, []);

  return (
    <div>
      { isBusy &&
        <Col className={'cart-view justify-center w-full h-full min-h-96'}>
          <Row className={'w-full justify-center'}>
            <UmbrellaSpinner />
          </Row>
        </Col>
      }
      { !isBusy &&
        <Col className={'cart-view w-full h-full min-h-96'}>
          <Row>
          </Row>

          <Row className={'cart-footer mt-5 px-5 w-full'}>
            <button
              className={'add-to-cart-btn w-full select-none rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'}
            >
              <span>Оплатить</span>
            </button>
          </Row>
        </Col>
      }
    </div>
  )
}