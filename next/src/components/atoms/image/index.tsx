import Style from './style';
import NextImage from 'next/image';

type Props = {
  src: string;
  alt: string;
  height?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
};

const Image = ({
  src,
  alt,
  height = 'auto',
  objectFit = 'cover',
  ...props
}: Props): JSX.Element => {
  return (
    <Style.Wrapper height={height} {...props}>
      <NextImage src={src} alt={alt} layout="fill" objectFit={objectFit} />
    </Style.Wrapper>
  );
};

export default Image;
