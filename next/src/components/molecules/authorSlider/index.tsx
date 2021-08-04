import Style from './style';
// import SliderTitle from '../../atoms/title/index';
import Author from '../../atoms/author/index';
import SimpleBar from 'simplebar-react';
import type { AuthorSlider } from '../../../models/user';

type Props = {
  items: AuthorSlider[];
  title: string;
};

const AuthorSlider = ({ items, title, ...props }: Props): JSX.Element => {
  return (
    <>
      <Style.Title>{title}</Style.Title>
      <SimpleBar autoHide={false}>
        <Style.SliderWrapper {...props}>
          <Style.Slider>
            {items.map((v, i) => (
              <Style.ItemList key={i}>
                <Author key={i} {...v} />
              </Style.ItemList>
            ))}
          </Style.Slider>
        </Style.SliderWrapper>
      </SimpleBar>
    </>
  );
};

export default AuthorSlider;
