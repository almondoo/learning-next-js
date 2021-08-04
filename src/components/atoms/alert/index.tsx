import { ReactNode, useState, useEffect } from 'react';
import Style from './style';

type Props = {
  open: boolean;
  type: string;
  children: ReactNode;
};

const Alert = ({ open, type = 'success', children, ...props }: Props): JSX.Element => {
  const [state, setState] = useState(open);
  const [image, setImage] = useState('');
  const handleClose = () => {
    setState(false);
  };

  useEffect(() => {
    setState(open);
  }, [open]);

  useEffect(() => {
    switch (type) {
      case 'success':
        setImage('/images/svg/check-circle.svg');
        break;
      case 'info':
        setImage('/images/svg/info-circle.svg');
        break;
      case 'warning':
        setImage('/images/svg/exclamation-triangle.svg');
        break;
      case 'error':
        setImage('/images/svg/exclamation-circle.svg');
        break;
    }
  }, [type]);

  return (
    <Style.Alert type={type} open={state} {...props}>
      <Style.Img src={image} />
      <Style.Message>{children}</Style.Message>
      <Style.Button onClick={handleClose}>×</Style.Button>
    </Style.Alert>
  );
};

export default Alert;
