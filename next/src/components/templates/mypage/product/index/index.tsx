import Style from './style';
import { KariProduct } from '../../../../../models/product';

type Props = {
  products: KariProduct[];
};

const Product = ({ products, ...props }: Props): JSX.Element => {
  console.log(products);
  return <Style.Wrapper {...props}></Style.Wrapper>;
};

export default Product;
