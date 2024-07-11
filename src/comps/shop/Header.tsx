import Row from '../layouts/Row.tsx';
import Col from '../layouts/Col.tsx';
import CartWidget from './CartWidget.tsx';
import './shop_header.css';

export default function Header() {
  return (
    <Row className={'shop-header w-full justify-end px-5 py-3'}>
      <Col className={'h-full'}>
        <CartWidget />
      </Col>
    </Row>
  )
}