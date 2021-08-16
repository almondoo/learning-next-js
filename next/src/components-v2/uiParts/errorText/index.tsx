import Style from './style';

type Props = {
  errors: string[];
};

const ErrorText = ({ errors, ...props }: Props) => {
  return (
    <>
      {errors.length ? (
        <Style.ErrorList {...props}>
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
