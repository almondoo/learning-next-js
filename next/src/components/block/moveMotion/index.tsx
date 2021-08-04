import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Style from './style';

const MoveMotion = () => {
  const [isPageMotion, setIsPageMotion] = useState(false);
  const [currentHref, setCurrentHref] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== currentHref) {
      setCurrentHref(router.pathname);
      setIsPageMotion(true);
      setTimeout(() => {
        setIsPageMotion(false);
      }, 2000);
    }
  }, [router]); // eslint-disable-line

  return (
    <Style.Fixed isPageMotion={isPageMotion}>
      <Style.MoveMotion>
        <Style.MoveBoxLeft isPageMotion={isPageMotion} />
        <Style.MoveBoxRight isPageMotion={isPageMotion} />
      </Style.MoveMotion>
    </Style.Fixed>
  );
};

export default MoveMotion;
