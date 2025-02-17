import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer.ts';
import { CartState } from '../../redux/cartReducer.ts';
import add_to_cart from '../../assets/media/icons/svg/add-to-cart.svg';
import './cart_widget.css';

export default function CartWidget() {
  const cartState: CartState = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();

  return (
    <div className={'cart-widget'}
       onClick={() => {
         navigate('/cart');
       }}
    >
      <img
        className={'cart-image'}
        src={add_to_cart}
        alt={'cart-image'}
      />
      <div className={'cart-size'}>
        <span>{ cartState.numberOfItems }</span>
      </div>
    </div>
  )
}