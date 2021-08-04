import { ReactNode } from 'react';
import Style from './style';
import variable from '../../common/variable';

type Props = {
  variant?: string;
  color?: string;
  fullWidth?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

/**
 *
 * @param {string} variant [contained, text]
 * @param {string} color
 * @param {any} children 子要素
 * @param {array} props それ以外全て
 */
const Button = ({
  variant = 'contained',
  color = variable.color.blue,
  fullWidth = false,
  children,
  ...props
}: Props): JSX.Element => {
  return (
    <Style.Button variant={variant} fullWidth={fullWidth} color={color} {...props}>
      {children}
    </Style.Button>
  );
};

export default Button;
