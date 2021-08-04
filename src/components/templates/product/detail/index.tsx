import Style from './style';
import type { ProductDetail } from '../../../../models/product';
import Slider from '../../../atoms/slickSlider/index';

type Props = {
  product: ProductDetail;
};

const Product = ({ product }: Props): JSX.Element => {
  return (
    <Style.Wrapper>
      <Style.ImageWrap>
        <Slider items={product.productImages}>
          {product.productImages.map((v, i) => {
            return (
              <div key={i}>
                <Style.Image src={v} alt={v + String(i)} objectFit="contain" />
              </div>
            );
          })}
        </Slider>
      </Style.ImageWrap>
      <Style.Contents>
        <Style.Title>{product.title}</Style.Title>
        <Style.Author src={product.artist.icon} name={product.artist.name} />
        <Style.Category>カテゴリー: {product.category.name}</Style.Category>
        <Style.Price>金額: &yen;{product.price}</Style.Price>
        <Style.Size>
          サイズ: 縦 {product.verticalLength}mm &times; 横 {product.horizontalLength}mm
        </Style.Size>
        <Style.DescriptionLabel>内容</Style.DescriptionLabel>
        <Style.Description>{product.description}</Style.Description>
      </Style.Contents>
    </Style.Wrapper>
  );
};

export default Product;
