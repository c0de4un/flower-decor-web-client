import { useState } from 'react';
import UmbrellaSpinner from '../spinners/UmbrellaSpinner';
import Row from '../layouts/Row';
import Col from '../layouts/Col';

export default function ProductsCatalog() {
  const [isLoading, setLoading] = useState(true);

  return (
    <Col className={'w-full h-full min-h-96 justify-center'}>
      <Row className={'w-full justify-center'}>
        { isLoading &&
          <UmbrellaSpinner />
        }
        { !isLoading &&
          <div className={'flex flex-wrap'}>
          </div>
        }
      </Row>
    </Col>
  )
}
