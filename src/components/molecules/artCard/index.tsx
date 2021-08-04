import Style from './style';
import Icon from '../../atoms/icon/index';

type Props = {
  icon: string;
  thumbnail: string;
  name: string;
  title: string;
  category: string;
  price: number;
};

const ArtCard = ({ icon, thumbnail, name, title, category, ...props }: Props): JSX.Element => {
  return (
    <Style.Card {...props}>
      <Style.Image src={thumbnail} alt={title} />
      <Style.Wrapper>
        <Style.AuthorInfo>
          <Icon src={icon} alt={name} size={40} />
          <Style.Name>{name}</Style.Name>
        </Style.AuthorInfo>
        <Style.Title>{title}</Style.Title>
        <Style.Category>{category}</Style.Category>
      </Style.Wrapper>
    </Style.Card>
  );
};

export default ArtCard;
