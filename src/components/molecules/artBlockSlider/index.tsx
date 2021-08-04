import Style from './style';
import ArtDescription from '../../atoms/artDescription/index';
import Slider from '../../atoms/slider/index';
import type { ProductList } from '../../../models/product';
import Link from '../../atoms/link/index';
import { routes } from '../../../utils/routes';

type Props = {
  items: ProductList[];
};

const ArtBlockSlider = ({ items, ...props }: Props): JSX.Element => {
  return (
    <Slider {...props}>
      {items.map((v, i) => (
        <Style.Item key={i}>
          <Link href={routes.productDetail + String(v.id)}>
            <Style.ImageWrap>
              <Style.Image src={v.src} alt={v.alt} />
            </Style.ImageWrap>
            <ArtDescription title={v.title} price={v.price} />
          </Link>
        </Style.Item>
      ))}
    </Slider>
  );
};

export default ArtBlockSlider;
