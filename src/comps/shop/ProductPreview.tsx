import { useDispatch } from 'react-redux';
import { setCart } from '../../redux/cartReducer.ts';
import Product from '../../models/Product';
import Col from '../layouts/Col.tsx';
import Row from '../layouts/Row.tsx';
import './product_preview.css';
import no_photo from '../../assets/media/icons/no_photo.png';
import add_to_cart from '../../assets/media/icons/svg/add-to-cart.svg';

type ProductPreviewProps = {
  product: Product;
}

export default function ProductPreview(props: ProductPreviewProps) {
  const dispatch = useDispatch();

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
            className={'w-full select-none rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'}
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
