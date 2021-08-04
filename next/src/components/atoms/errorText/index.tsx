import Style from './style';

const ErrorText = ({ errors, ...props }) => {
  return (
    <>
      {errors.length ? (
        <Style.ErrorList errors={errors} {...props}>
          {errors.map((v, i) => (
            <Style.ErrorListItem key={i}>{v}</Style.ErrorListItem>
          ))}
        </Style.ErrorList>
      ) : (
        ''
      )}
    </>
  );
};

export default ErrorText;
