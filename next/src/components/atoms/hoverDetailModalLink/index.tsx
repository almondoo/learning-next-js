import { forwardRef } from 'react';
import Style from './style';
import Link from 'next/link';

type ForwardProps = {
  href?: string;
  onClick?: React.MouseEventHandler;
};

const Item = forwardRef<HTMLAnchorElement, ForwardProps>(function Item(
  { href, onClick, ...props },
  ref,
) {
  return (
    <Style.Link href={href} onClick={onClick} ref={ref} {...props}>
      <Style.Detail>Detail</Style.Detail>
    </Style.Link>
  );
});

type Props = {
  children: React.ReactNode;
  href: string;
};

const HoverDetailModalLink = ({ children, href, ...props }: Props): JSX.Element => {
  return (
    <Style.Wrapper>
      {children}
      <Link href={href} passHref>
        <Item {...props} />
      </Link>
    </Style.Wrapper>
  );
};

export default HoverDetailModalLink;
