import { ReactNode } from 'react';
import Style from './style';
import SimpleBar from 'simplebar-react';

type Props = {
  children: ReactNode;
};

const Slider = ({ children, ...props }: Props): JSX.Element => {
  return (
    <SimpleBar autoHide={false}>
      <Style.SliderWrapper {...props}>
        <Style.Slider>{children}</Style.Slider>
      </Style.SliderWrapper>
    </SimpleBar>
  );
};

export default Slider;
