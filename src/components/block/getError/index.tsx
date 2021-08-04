import Style from './style';

type Props = {
  message?: string;
  isError: boolean;
};

const GetError = ({ message = '取得に失敗しました。', isError }: Props): JSX.Element => {
  return (
    <Style.Wrapper>
      <Style.Message>{message}</Style.Message>
      <Style.Retry isError={isError}>
        <Style.Spinner>
          <Style.Bounce />
          <Style.Bounce />
          <Style.Bounce />
        </Style.Spinner>
        <Style.RetryMes>再度取得しています。</Style.RetryMes>
      </Style.Retry>
    </Style.Wrapper>
  );
};

export default GetError;
