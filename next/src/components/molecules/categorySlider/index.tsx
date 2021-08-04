import Style from './style';
import CategoryImage from '../../atoms/categoryImage/index';
import SliderTitle from '../../atoms/title/index';
import SimpleBar from 'simplebar-react';

/**
 *
 * @param {Array} items
 * @returns
 */
const CategorySlider = ({ items, title, ...props }) => {
  return (
    <>
      <SliderTitle>{title}</SliderTitle>
      <SimpleBar autoHide={false}>
        <Style.SliderWrapper {...props}>
          <Style.Slider>
            {items.map((v, i) => (
              <Style.ItemList key={i}>
                <CategoryImage {...v} />
              </Style.ItemList>
            ))}
          </Style.Slider>
        </Style.SliderWrapper>
      </SimpleBar>
    </>
  );
};

export default CategorySlider;
