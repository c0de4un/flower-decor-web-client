import Row from '../comps/layouts/Row.tsx';
import Col from '../comps/layouts/Col.tsx';
import GridView from '../comps/layouts/GridView.tsx';

export default function Home() {
  return (
    <Col className={'w-full h-full p-5'}>
      <Row className={'w-full justify-center flex-wrap'}>
        <GridView
        />
      </Row>
    </Col>
  )
}
