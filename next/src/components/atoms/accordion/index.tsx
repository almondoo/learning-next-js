import { useState, useRef, ReactNode } from 'react';
import Style from './style';

type Props = {
  title: string;
  children: ReactNode;
};

const Accordion = ({ title, children, ...props }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const inputEl = useRef(null);

  return (
    <Style.Wrapper {...props}>
      <Style.Bar onClick={() => setIsOpen(!isOpen)}>
        <Style.Title>{title}</Style.Title>
        <Style.Icon />
      </Style.Bar>
      <Style.ContentWrap ref={inputEl} isOpen={isOpen}>
        <Style.Content>{children}</Style.Content>
      </Style.ContentWrap>
    </Style.Wrapper>
  );
};

export default Accordion;
