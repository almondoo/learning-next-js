import React, { ChangeEvent, useState } from "react";
import Style from "./style";
import Link from "next/link";
import TextField from "../../atoms/textField/index";
import RegisterApi from "../../../api/fetch/register";

const Login = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const handleRegister = () => {
    RegisterApi(state)
      .then((result) => {
        console.log(result);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <Style.Wrapper>
      <Style.Card>
        <TextField
          value={state.email}
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setState({ ...state, email: e.target.value })
          }
        >
          名前
        </TextField>
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
        <TextField
          type="password"
          value={state.password}
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setState({ ...state, password: e.target.value })
          }
        >
          同じパスワードを入力
        </TextField>
        <Style.Button onClick={handleRegister}>アカウント作成</Style.Button>
        <Style.Links>
          <div>
            <Link href="/password/forgot" passHref>
              <Style.Link>アカウント作成</Style.Link>
            </Link>
            <span>はこちらから</span>
          </div>
        </Style.Links>
      </Style.Card>
    </Style.Wrapper>
  );
};

export default Login;
