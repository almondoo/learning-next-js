import Style from './style';

const CategoryImage = ({ src, text, ...props }) => {
  return (
    <Style.Wrapper {...props}>
      <Style.Media src={src} layout="fill" objectFit="cover" alt={text} />
      <Style.CategoryTitle>{text}</Style.CategoryTitle>
    </Style.Wrapper>
  );
};

export default CategoryImage;
