import { forwardRef } from 'react';
import Style from './style';
import Image from 'next/image';
import Link from 'next/link';

type ForwardProps = {
  href?: string;
  onClick?: React.MouseEventHandler;
  title: string;
  price: string;
};

const Item = forwardRef<HTMLAnchorElement, ForwardProps>(function Item(
  { href, onClick, title, price, ...props },
  ref,
) {
  return (
    <Style.Link href={href} onClick={onClick} ref={ref} {...props}>
      <Style.Detail>
        <Style.Title>{title}</Style.Title>
        <Style.Price>&yen;{price}</Style.Price>
        <Style.Button>Detail</Style.Button>
      </Style.Detail>
    </Style.Link>
  );
});

type Props = {
  src: string;
  alt: string;
  href: string;
  title: string;
  price: number;
};

const SquareImage = ({ src, alt, href, title, price, ...props }: Props): JSX.Element => {
  const priceLocale = price.toLocaleString();
  return (
    <Style.Wrapper {...props}>
      <Style.ImageWrap>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </Style.ImageWrap>
      <Style.Description>
        <Style.Title>{title}</Style.Title>
        <Style.Price>&yen;{priceLocale}</Style.Price>
      </Style.Description>
      <Link href={href} passHref>
        <Item title={title} price={priceLocale} {...props} />
      </Link>
    </Style.Wrapper>
  );
};

export default SquareImage;
