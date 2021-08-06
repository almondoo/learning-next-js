import Style from './style';
import type { ProductDetail } from '../../../../models/product';
import Slider from '../../../uiParts/slickSlider/index';
import Link from '../../../uiParts/link/index';
import { routes } from '../../../../utils/routes';

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
        <Style.Author
          src={product.artist.icon}
          name={product.artist.name}
          position={product.artist.category.name}
        />
        <Style.Category>カテゴリー: {product.category.name}</Style.Category>
        <Style.Price>金額: &yen;{product.price}</Style.Price>
        <Style.Size>
          サイズ: 縦 {product.verticalLength}mm &times; 横 {product.horizontalLength}mm
        </Style.Size>
        <Style.DescriptionLabel>内容</Style.DescriptionLabel>
        <Style.Description>{product.description}</Style.Description>
      </Style.Contents>
      <Style.BackBtnGroup>
        <Link href={routes.product}>作品一覧へ戻る</Link>
      </Style.BackBtnGroup>
    </Style.Wrapper>
  );
};

export default Product;
