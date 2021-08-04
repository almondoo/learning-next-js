import Style from './style';

type Props = {
  categories: {
    name: string;
    value: string;
  }[];
};

const Search = ({ categories, ...props }: Props): JSX.Element => {
  return (
    <Style.Wrapper {...props}>
      <Style.CategoryWrap>
        <Style.Triangle htmlFor="search" />
        <Style.Category id="search">
          {categories.map((v, i) => (
            <option key={i} value={v.value}>
              {v.name}
            </option>
          ))}
        </Style.Category>
      </Style.CategoryWrap>
      <Style.Input placeholder="検索" />
    </Style.Wrapper>
  );
};

export default Search;
