import Style from './style';
import Icon from '../icon/index';

type Props = {
  icon: string;
  image: string;
  name: string;
  title: string;
  category: string;
};

const ArtCard = ({ icon, image, name, title, category, ...props }: Props): JSX.Element => {
  return (
    <Style.Card {...props}>
      <Style.Image src={image} alt={title} />
      <Style.Wrapper>
        <Style.AuthorInfo>
          <Icon src={icon} alt="" size={40} />
          <Style.Name>{name}</Style.Name>
        </Style.AuthorInfo>
        <Style.Title>{title}</Style.Title>
        <Style.Category>{category}</Style.Category>
      </Style.Wrapper>
    </Style.Card>
  );
};

export default ArtCard;
