import Style from './style';

const SliderTitle = ({ children, ...props }) => {
  return <Style.Title {...props}>{children}</Style.Title>;
};

export default SliderTitle;
