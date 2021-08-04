import Style from './style';
import ArtBlockHeader from '../../molecules/artBlockHeader/index';
import ArtBlockSlider from '../../molecules/artBlockSlider/index';
import { ProductList } from '../../../models/product';
import { Artist } from '../../../models/artist';

type Props = {
  items: ProductList[];
  author: Artist;
};
const ArtSquareSlider = ({ items, author, ...props }: Props): JSX.Element => {
  return (
    <Style.Wrapper {...props}>
      <ArtBlockHeader {...author} />
      <ArtBlockSlider items={items} />
    </Style.Wrapper>
  );
};

export default ArtSquareSlider;
