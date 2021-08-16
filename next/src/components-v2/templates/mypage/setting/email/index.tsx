import { useState, useCallback, ChangeEvent } from 'react';
import Style from './style';
import SplitSettingPage from '../../../../originals/splitSettingPage/index';
import Button from '../../../../uiParts/button/index';
import TextField from '../../../../uiParts/textField/index';

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
                (v: ChangeEvent<HTMLInputElement>) => {
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
                (v: ChangeEvent<HTMLInputElement>) => {
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
