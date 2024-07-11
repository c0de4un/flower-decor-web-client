import add_to_cart from '../../assets/media/icons/svg/add-to-cart.svg';
import './cart_widget.css';

export default function CartWidget() {
  return (
    <div className={'cart-widget'}>
      <img
        className={'cart-image'}
        src={add_to_cart}
        alt={'cart-image'}
      />
      <div className={'cart-size'}>
        <span>0</span>
      </div>
    </div>
  )
}