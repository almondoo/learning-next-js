import React, { useState, useEffect, useRef } from 'react';
import Style from './style';
import { Transition } from 'react-transition-group';

type Props = {
  children: React.ReactNode;
  vector: string;
};

const Insert = ({ children, vector, ...props }: Props): JSX.Element => {
  const [inProp, setInProp] = useState(false);
  const inputEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = inputEl;
    /**
     * 上下左右からインサートする
     */
    const Scroll = () => {
      if (current) {
        const rect = current.getBoundingClientRect();
        //- 画面に出ている場合はtrue
        const isView = 0 < rect.bottom && rect.top < window.innerHeight;
        if (!inProp && isView) {
          setInProp(true);
        }
      }
    };
    window.addEventListener('scroll', Scroll);
    window.addEventListener('load', Scroll);
    return () => {
      window.removeEventListener('scroll', Scroll);
      window.removeEventListener('load', Scroll);
    };
  }, [inProp]);

  return (
    <Style.Overflow {...props}>
      <Transition in={inProp} timeout={500} nodeRef={inputEl}>
        {(state) => (
          <Style.Wrapper state={state} vector={vector} ref={inputEl}>
            {children}
          </Style.Wrapper>
        )}
      </Transition>
    </Style.Overflow>
  );
};

export default Insert;
