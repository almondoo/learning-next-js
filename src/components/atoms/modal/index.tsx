import { useState, useEffect } from 'react';
import Style from './style';

const Modal = ({ open, children, ...props }) => {
  const [state, setState] = useState(open);
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
