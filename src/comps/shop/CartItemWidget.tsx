import Row from '../layouts/Row';
import Col from '../layouts/Col';
import CartItem from '../../models/CartItem';
import no_photo from '../../assets/media/icons/no_photo.png';
import './cart_item_widget.css';

type CartItemWidgetProps = {
  item: CartItem;
};

export default function CartItemWidget(props: CartItemWidgetProps) {
  const renderProductPhoto = (): string => {
    if (!props.item.product || !props.item.product.images.length) {
      return no_photo;
    }

    return props.item.product.images[0];
  };

  return (
    <div className={'cart-item'}>
      <Col className={'justify-center'}>
        <Row className={'w-full justify-center'}>
          <img
            className={'product-photo'}
            src={renderProductPhoto()}
            alt={props.item.product?.uuid}
          />
        </Row>

        <Row className={'description mt-2'}>
          <span>{props.item.product?.title}</span>
        </Row>

        <Row className={'px-5 w-full justify-center mt-2 qty-controls'}>
          <Col className={'h-full justify-center'}>
            <button
              className={'select-none rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'}
            >
              <span>+</span>
            </button>
          </Col>

          <Col className={'ml-4 h-full justify-center mt-2'}>
            <span>{props.item.count}</span>
          </Col>

          <Col className={'ml-4 h-full justify-center'}>
            <button
              className={'select-none rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'}
            >
              <span>-</span>
            </button>
          </Col>
        </Row>
      </Col>
    </div>
  )
}