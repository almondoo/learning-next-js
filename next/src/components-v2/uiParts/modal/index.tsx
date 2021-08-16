import { useState, useEffect, ReactNode } from 'react';
import Style from './style';

type Props = {
  open: boolean;
  children: ReactNode;
};

const Modal = ({ open, children, ...props }: Props) => {
  const [state, setState] = useState<boolean>(open);
  useEffect(() => {
    setState(open);
    if (open) {
      document.body.style.overflowY = 'hidden';
    }
  }, [open]);

  return (
    <Style.Wrapper open={state} {...props}>
      <Style.Modal>{children}</Style.Modal>
    </Style.Wrapper>
  );
};

export default Modal;
