import { useState, useEffect, useRef, forwardRef } from 'react';
import Style from './style';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Transition } from 'react-transition-group';
import SideMenu from '../sidemenu/index';

type ForwardProps = {
  href?: string;
  onClick?: React.MouseEventHandler;
};

const ClickLink = forwardRef<HTMLAnchorElement, ForwardProps>(function ClickLink(
  { onClick, href },
  ref,
) {
  const router = useRouter();
  return (
    <Style.Link href={href} onClick={onClick} ref={ref}>
      {router.pathname === '/' ? (
        <h1>
          <Image
            src="/images/logo/first-art-h.png"
            alt="FIRST ART"
            width={200}
            height={50}
            loading="eager"
          />
        </h1>
      ) : (
        <Image
          src="/images/logo/first-art-h.png"
          alt="FIRST ART"
          width={200}
          height={50}
          loading="eager"
        />
      )}
    </Style.Link>
  );
});

const Header = () => {
  const [inProp, setInProp] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const inputEl = useRef<HTMLDivElement>(null);
  const [startPosition, setStartPosition] = useState<number>(0);
  const router = useRouter();

  const handleSetOpen = (): void => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (
        startPosition === 0 ||
        (y < startPosition && startPosition < document.body.clientHeight)
      ) {
        setInProp(true);
      } else if (y >= 80) {
        setInProp(false);
      }
      setStartPosition(y);
    };

    const opts: AddEventListenerOptions & EventListenerOptions = { passive: true };
    window.addEventListener('scroll', handleScroll, opts);
    return () => {
      window.removeEventListener('scroll', handleScroll, opts);
    };
  });

  useEffect(() => {
    setInProp(true);
  }, [router.pathname]);

  return (
    <Transition in={inProp} timeout={500} nodeRef={inputEl}>
      {(state) => (
        <Style.Wrapper state={state} ref={inputEl}>
          <Link href="/" passHref>
            <ClickLink />
          </Link>
          <Style.MenuBtn onClick={handleSetOpen} open={open}>
            <Style.Span open={open} />
            <Style.Span open={open} />
            <Style.Span open={open} />
          </Style.MenuBtn>
          <SideMenu open={open} handleSetOpen={handleSetOpen} />
        </Style.Wrapper>
      )}
    </Transition>
  );
};

export default Header;
