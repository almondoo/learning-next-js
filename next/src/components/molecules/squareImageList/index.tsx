import Style from './style';
import SquareImage from '../../atoms/squareImage/index';

const SquareImageList = ({ items, title, ...props }) => {
  return (
    <>
      <Style.Title>{title}</Style.Title>
      <Style.List {...props}>
        {items.map((v, i) => (
          <Style.ItemList key={i}>
            <SquareImage href={`/product/${i}`} {...v} />
          </Style.ItemList>
        ))}
      </Style.List>
    </>
  );
};

export default SquareImageList;
