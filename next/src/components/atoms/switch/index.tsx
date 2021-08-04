import Style from './style';

type Props = {
  id: string;
  value: boolean;
  on: string;
  off: string;
  onChange: () => void;
};

const Switch = ({ id, value, on, off, ...props }: Props): JSX.Element => {
  return (
    <Style.Wrapper>
      <Style.Switch
        id={id}
        type="checkbox"
        checked={value ? true : false}
        {...props}
      ></Style.Switch>
      <Style.Label htmlFor={id}></Style.Label>
      <Style.Text>{value ? on : off}</Style.Text>
    </Style.Wrapper>
  );
};

export default Switch;
