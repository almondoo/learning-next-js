import Style from './style';
import type { ProductAndArtistList } from '../../../../models/product';
import ArtCard from '../../../uiParts/artCard/index';
import Link from '../../../uiParts/link/index';
import { routes } from '../../../../utils/routes';

type Props = {
  products: ProductAndArtistList[];
};

const Product = ({ products }: Props): JSX.Element => {
  return (
    <Style.Wrapper>
      <Style.Title>作品一覧</Style.Title>
      <Style.List>
        {products.map((v) => {
          return (
            <Style.ListItem key={v.id}>
              <Link href={routes.productDetail + String(v.id)} isUnderline={false}>
                <ArtCard
                  icon={v.artist.icon}
                  thumbnail={v.thumbnail}
                  name={v.artist.name}
                  title={v.title}
                  category={v.category.name}
                  price={v.price}
                />
              </Link>
            </Style.ListItem>
          );
        })}
      </Style.List>
    </Style.Wrapper>
  );
};

export default Product;
