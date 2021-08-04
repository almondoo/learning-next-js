import Style from './style';
import ArticleCard from '../articleCard/index';
import { ArticleList } from '../../../models/article';

type Props = {
  items: ArticleList[];
};

const ArticleList = ({ items, ...props }: Props): JSX.Element => {
  return (
    <Style.List {...props}>
      {items.map((v, i) => (
        <Style.Item key={i}>
          <ArticleCard {...v} />
        </Style.Item>
      ))}
    </Style.List>
  );
};

export default ArticleList;
