import Style from './style';

type Props = {
  title: string;
  price: number;
};

const ArtDescription = ({ title, price, ...props }: Props): JSX.Element => {
  return (
    <Style.Wrapper {...props}>
      <Style.Title>{title}</Style.Title>
      <Style.Price>&yen;{price}</Style.Price>
    </Style.Wrapper>
  );
};

export default ArtDescription;
