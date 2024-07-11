import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../redux/cartReducer.ts';
import CartItem from '../../models/CartItem.ts';
import { CartState } from '../../redux/cartReducer.ts';
import { RootState } from '../../redux/rootReducer.ts';
import Product from '../../models/Product';
import Col from '../layouts/Col.tsx';
import Row from '../layouts/Row.tsx';
import './product_preview.css';
import no_photo from '../../assets/media/icons/no_photo.png';
import add_to_cart from '../../assets/media/icons/svg/add-to-cart.svg';
import { getRandom } from '../../math/Random.ts';

type ProductPreviewProps = {
  product: Product;
}

export default function ProductPreview(props: ProductPreviewProps) {
  const cartState: CartState = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [isBusy, setBusy] = useState(false);

  const addToCart = () => {
    setBusy(true);
    const delay = getRandom(1000, 3000);
    setTimeout(() => {

      const newState: CartState = {
        ...cartState,
        items: [...cartState.items]
      };

      const cartItem: CartItem = new CartItem();
      cartItem.product = props.product;
      cartItem.price = props.product.price;
      cartItem.count = 1;
      cartItem.uuid = '';

      newState.numberOfItems++;
      newState.items.push(cartItem);

      dispatch(setCart(newState));
      setBusy(false);
    }, delay);
  };

  return (
    <div className={'product-preview'}>
      <Col className={'w-full h-full'}>
        <Row className={'w-full justify-center p-2'}>
          <img
            className={'photo'}
            src={props.product.images.length ? props.product.images[0] : no_photo}
            alt={`product_preview_${props.product.id}`}
            onError={(e) => {
              const imgElement = e.target as HTMLImageElement;
              imgElement.src = no_photo;
            }}
          />
        </Row>

        <Row className={'mt-2 w-full justify-center'}>
          <span className={'price'}>{props.product.price}&nbsp;</span><b>₽</b>
        </Row>

        <Row className={'w-full justify-center mt-4 px-5'}>
          <button
            disabled={isBusy}
            className={'add-to-cart-btn w-full select-none rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'}
            onClick={() => {
              if (isBusy) {
                return;
              }

              addToCart();
            }}
          >
            <Row className={'w-full justify-center'}>
              <img
                src={add_to_cart}
                alt={'add-to-cart'}
              />
            </Row>
          </button>
        </Row>
      </Col>
    </div>
  )
}
