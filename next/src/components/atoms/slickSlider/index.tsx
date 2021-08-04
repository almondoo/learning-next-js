import { ReactNode, useState } from 'react';
import Style from './style';
import Slider, { CustomArrowProps } from 'react-slick';
import Image from '../image/index';

type Props = {
  children: ReactNode;
  items?: string[];
};

const SampleNextArrow = (props: CustomArrowProps): JSX.Element => {
  const { className, style, onClick } = props;
  return <Style.NextArrow className={className} style={{ ...style }} onClick={onClick} />;
};

const SamplePrevArrow = (props: CustomArrowProps): JSX.Element => {
  const { className, style, onClick } = props;
  return <Style.PrevArrow className={className} style={{ ...style }} onClick={onClick} />;
};

const SlickSlider = ({ items, children, ...props }: Props): JSX.Element => {
  const [nav, setNav] = useState<Slider | undefined>(undefined);
  const [secondNav, setSecondNav] = useState<Slider | undefined>(undefined);

  return (
    <Style.Wrapper isDots={items ? false : true} {...props}>
      <Slider
        dots={items ? false : true}
        asNavFor={secondNav}
        ref={(slider: Slider) => setNav(slider)}
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
      >
        {children}
      </Slider>
      {items ? (
        <Slider
          asNavFor={nav}
          ref={(slider: Slider) => setSecondNav(slider)}
          slidesToShow={3}
          swipeToSlide
          focusOnSelect
          centerMode
        >
          {items.map((v, i) => (
            <Image key={i} src={v} alt={String(i)} height="50px" objectFit="contain" />
          ))}
        </Slider>
      ) : (
        ''
      )}
    </Style.Wrapper>
  );
};

export default SlickSlider;
