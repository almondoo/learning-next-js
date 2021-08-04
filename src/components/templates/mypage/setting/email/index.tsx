import { useState, useCallback } from 'react';
import Style from './style';
import SplitSettingPage from '../../../../organisms/splitSettingPage/index';
import Button from '../../../../atoms/button/index';
import TextField from '../../../../atoms/textField/index';

type Props = {
  email: string;
};

const SettingEmail = ({ email, ...props }: Props): JSX.Element => {
  const [data, setData] = useState({ email, password: '' });

  const handleSubmit = (): void => {
    console.log('更新');
    //- 更新APIを叩く
  };

  return (
    <SplitSettingPage>
      <Style.Main {...props}>
        <Style.List>
          <Style.ListItem>
            <TextField
              onChange={useCallback(
                (v) => {
                  setData({ ...data, email: v.target.value });
                },
                [data],
              )}
              value={data.email}
            >
              新しいメールアドレス
            </TextField>
          </Style.ListItem>
          <Style.ListItem>
            <TextField
              type="password"
              onChange={useCallback(
                (v) => {
                  setData({ ...data, password: v.target.value });
                },
                [data],
              )}
              value={data.password}
            >
              現在のパスワード
            </TextField>
          </Style.ListItem>
        </Style.List>
        <Style.SaveButton>
          <Button onClick={handleSubmit}>ボタン</Button>
        </Style.SaveButton>
      </Style.Main>
    </SplitSettingPage>
  );
};

export default SettingEmail;
