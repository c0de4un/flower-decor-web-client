import { useState, useEffect } from 'react';
import UmbrellaSpinner from '../spinners/UmbrellaSpinner';
import ProductPreview from './ProductPreview';
import Row from '../layouts/Row';
import Col from '../layouts/Col';
import { test_products } from '../../data/test_products';
import Product from '../../models/Product';

class ProductsCatalogState {
  public isInitialized: boolean = false;
}
const productsCatalogState = new ProductsCatalogState();

export default function ProductsCatalog() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = () => {
    setLoading(true);

    setTimeout(() => {
      setProducts(test_products);
      setLoading(false);
    }, 2500)
  };

  useEffect(() => {
    if (productsCatalogState.isInitialized) {
      return;
    }
    productsCatalogState.isInitialized = true;

    fetchProducts();
  }, []);

  return (
    <Col className={'w-full h-full min-h-96 justify-center'}>
      <Row className={'w-full justify-center'}>
        { isLoading &&
          <UmbrellaSpinner />
        }
        { !isLoading &&
          <div className={'flex w-full justify-center flex-wrap gap-5'}>
            { products.map((product, index) => {
              return (
                <ProductPreview
                  key={index}
                  product={product}
                />
              )
            })
            }
          </div>
        }
      </Row>
    </Col>
  )
}
