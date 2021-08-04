import Style from './style';
import Image from 'next/image';

const Author = ({ src, name, position, ...props }) => {
  return (
    <Style.Wrapper {...props}>
      <Style.Icon>
        <Image src={src} alt={name} layout="fill" objectFit="cover" />
      </Style.Icon>
      <Style.Name>{name}</Style.Name>
      <Style.Position>{position}</Style.Position>
    </Style.Wrapper>
  );
};

export default Author;
