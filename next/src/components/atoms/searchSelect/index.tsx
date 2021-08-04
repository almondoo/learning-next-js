import { useMemo } from 'react';
import Style from './style';

const customStyles = {
  menu: () => ({
    'z-index': 2,
  }),
};

/**
 * 検索機能セレクト
 * @param {Object} value 値
 * @param {Array} items {label: '表示名', value: '値'}
 * @param {Boolean} isRequired 必須
 * @param {Array} errors エラー内容
 */
const SearchSelect = ({
  value,
  items = [],
  isRequired = false,
  errors = [],
  children,
  ...props
}) => {
  useMemo(() => {
    if (items.length > 0) {
      items.unshift({ label: '選択しない', value: '' });
    }
  }, [items]);
  return (
    <Style.Wrapper>
      <Style.Field>
        <Style.Select
          value={items.filter((item) => item.value === value)[0]}
          defaultValue={{ label: '選択しない', value: '' }}
          placeholder={children}
          options={items}
          styles={customStyles}
          errors={errors}
          {...props}
        ></Style.Select>
        <Style.Label isInput>
          {children}
          {isRequired ? <Style.Required>*</Style.Required> : ''}
        </Style.Label>
      </Style.Field>
      {errors.map((error) => (
        <Style.Error key={error}>{error}</Style.Error>
      ))}
    </Style.Wrapper>
  );
};

export default SearchSelect;
