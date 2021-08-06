import Style from './style';

type Props = {
  thumbnail: string;
  alt: string;
  title: string;
  price: number;
};

const ListItem = ({ thumbnail, alt, title, price, ...props }: Props) => {
  return (
    <Style.Wrapper {...props}>
      <Style.ImageWrap>
        <Style.Image src={thumbnail} alt={alt} />
      </Style.ImageWrap>
      <Style.Description>
        <Style.Title>{title}</Style.Title>
        <Style.Price>&yen;{price}</Style.Price>
      </Style.Description>
    </Style.Wrapper>
  );
};

export default ListItem;
