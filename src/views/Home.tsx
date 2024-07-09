import Row from '../comps/layouts/Row.tsx';
import Col from '../comps/layouts/Col.tsx';
import ProductsCatalog from '../comps/shop/ProductsCatalog.tsx';

export default function Home() {
  return (
    <Col className={'w-full h-full p-5'}>
      <Row className={'w-full justify-center flex-wrap'}>
        <ProductsCatalog />
      </Row>
    </Col>
  )
}
