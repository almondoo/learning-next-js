import { useState } from "react";
import Style from "./style";
import { userLoginApi } from "../../../api/fetch/login";
import Link from "next/link";
import TextField from "../../atoms/textField/index";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handlerLogin = async () => {
    await userLoginApi(state)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <Style.Wrapper>
      <Style.Card>
        <TextField
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        >
          メールアドレス
        </TextField>
        <TextField
          type="password"
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        >
          パスワード
        </TextField>
        <Style.Button onClick={handlerLogin}>ログイン</Style.Button>
        <Style.Links>
          <Link href="/password/forgot" passHref>
            <Style.Link>パスワード忘れた方</Style.Link>
          </Link>
          <Link href="/register" passHref>
            <Style.Link>アカウント作成</Style.Link>
          </Link>
        </Style.Links>
      </Style.Card>
    </Style.Wrapper>
  );
};

export default Login;
