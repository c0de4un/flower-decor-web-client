import Row from '../layouts/Row';
import Col from '../layouts/Col';
import CartItem from '../../models/CartItem';
import CartItemWidget from './CartItemWidget';

type CartItemsListProps = {
  items: CartItem[];
}

export default function CartItemsList(props: CartItemsListProps) {
  return (
    <div className={'w-full cart-item-list'}>
      <Col className={'w-full justify-center'}>
        { props.items.map((item: CartItem, index: number) => {
          return (
            <Row key={index} className={`w-full justify-center ${index > 0 ? 'mt-4' : ''}`}>
              <CartItemWidget item={item} />
            </Row>
          )
        })
        }
      </Col>
    </div>
  )
}