import Style from './style';
import ArticleCard from '../articleCard/index';
import Slider from '../../atoms/slider/index';
import Link from '../../atoms/link/index';
import { ArticleList } from '../../../models/article';

type Props = {
  items: ArticleList[];
};

const ArticleCardSlider = ({ items, ...props }: Props): JSX.Element => {
  return (
    <Slider {...props}>
      {items.map((v, i) => (
        <Style.Item key={i}>
          <Link href={`/article/${v.id}`}>
            <ArticleCard {...v} />
          </Link>
        </Style.Item>
      ))}
    </Slider>
  );
};

export default ArticleCardSlider;
