import Style from './style';
import Icon from '../../atoms/icon/index';

type Props = {
  src: string;
  name: string;
};

const Author = ({ src, name, ...props }: Props): JSX.Element => {
  return (
    <Style.Wrapper {...props}>
      <Icon src={src} alt="name" size={40} />
      <Style.Name>{name}</Style.Name>
    </Style.Wrapper>
  );
};

export default Author;
