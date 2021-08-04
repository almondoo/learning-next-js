import Style from './style';
import ArtCard from '../../atoms/artCard/index';
import Link from '../../atoms/link';
import SimpleBar from 'simplebar-react';

/**
 *
 * @param {Array} items
 */
const ArtCardSlider = ({ items }) => {
  return (
    <Style.Wrapper>
      <Style.SliderTitle>作品一覧</Style.SliderTitle>
      <SimpleBar autoHide={false}>
        <Style.SliderWrapper>
          <Style.Slider>
            {items.map((v, i) => (
              <Style.ItemList key={i}>
                <Link href={`/product/${v.id}`}>
                  <ArtCard key={v.title} {...v} />
                </Link>
              </Style.ItemList>
            ))}
          </Style.Slider>
        </Style.SliderWrapper>
      </SimpleBar>
    </Style.Wrapper>
  );
};

export default ArtCardSlider;
