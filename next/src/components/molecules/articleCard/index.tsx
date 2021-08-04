import Style from './style';

type Props = {
  thumbnail: string;
  title: string;
  createdAt: string;
};

const ArticleCard = ({ thumbnail, title, createdAt, ...props }: Props): JSX.Element => {
  return (
    <Style.Wrapper {...props}>
      <Style.ImageWrap>
        <Style.Image src={thumbnail} alt={title} layout="fill" objectFit="cover" />
      </Style.ImageWrap>
      <Style.Date>{createdAt}</Style.Date>
      <Style.Title>{title}</Style.Title>
    </Style.Wrapper>
  );
};

export default ArticleCard;
