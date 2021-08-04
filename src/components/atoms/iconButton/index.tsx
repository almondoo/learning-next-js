import Style from './style';

const IconButton = ({ children, ...props }) => {
  return <Style.Icon {...props}>{children}</Style.Icon>;
};

export default IconButton;
