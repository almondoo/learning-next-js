import Style from './style';

/**
 * セレクト
 * @param {String} value
 * @param {Array} items
 * @param {Boolean} isRequired
 * @param {Array} errors
 */
const Select = ({ value, items, isRequired = false, errors = [], children, ...props }) => {
  return (
    <Style.Wrapper>
      <Style.Field>
        <Style.Select value={value} errors={errors} {...props}>
          <Style.Option value="">選択しない</Style.Option>
          {items.map((item) => {
            return (
              <Style.Option key={item.id} value={item.id}>
                {item.name}
              </Style.Option>
            );
          })}
        </Style.Select>
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

export default Select;
