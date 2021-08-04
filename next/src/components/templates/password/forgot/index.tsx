import { ChangeEvent, useState } from 'react';
import Style from './style';
import Link from 'next/link';
import TextField from '../../../atoms/textField/index';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  return (
    <Style.Wrapper>
      <Style.Card>
        <TextField
          value={state.email}
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setState({ ...state, email: e.target.value })
          }
        >
          メールアドレス
        </TextField>
        <TextField
          type="password"
          value={state.password}
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setState({ ...state, password: e.target.value })
          }
        >
          パスワード
        </TextField>
        <Style.Button>ログイン</Style.Button>
        <Style.Links>
          <Link href="/user/password/forgot" passHref>
            <Style.Link>パスワード忘れた方</Style.Link>
          </Link>
          <Link href="/user/register" passHref>
            <Style.Link>アカウント作成</Style.Link>
          </Link>
        </Style.Links>
      </Style.Card>
    </Style.Wrapper>
  );
};

export default Login;
