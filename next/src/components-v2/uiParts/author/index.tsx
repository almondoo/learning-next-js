import Style from './style';
import Icon from '../icon/index';

type Props = {
  src: string;
  name: string;
  position: string;
};

const Author = ({ src, name, position, ...props }: Props) => {
  return (
    <Style.Wrapper {...props}>
      <Icon src={src} alt={name} size={50} />
      <Style.AuthorInfo>
        <Style.Position>{position}</Style.Position>
        <Style.AuthorName>{name}</Style.AuthorName>
      </Style.AuthorInfo>
    </Style.Wrapper>
  );
};

export default Author;
