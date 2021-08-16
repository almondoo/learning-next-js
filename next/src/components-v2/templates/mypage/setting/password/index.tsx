import { useState, useCallback, ChangeEvent } from 'react';
import Style from './style';
import SplitSettingPage from '../../../../originals/splitSettingPage/index';
import Button from '../../../../uiParts/button/index';
import TextField from '../../../../uiParts/textField/index';

const SettingPassword = () => {
  const [data, setData] = useState({
    password: '',
    new_password: '',
    new_password_confirm: '',
  });

  const handleSubmit = () => {
    console.log('更新');
    //- 更新APIを叩く
  };

  return (
    <SplitSettingPage>
      <Style.Main>
        <Style.List>
          <Style.ListItem>
            <TextField
              type="password"
              onChange={useCallback(
                (e: ChangeEvent<HTMLInputElement>) => {
                  setData({
                    ...data,
                    password: e.target.value,
                  });
                },
                [data],
              )}
              value={data.password}
            >
              現在のパスワード
            </TextField>
          </Style.ListItem>
          <Style.ListItem>
            <TextField
              type="password"
              onChange={useCallback(
                (e: ChangeEvent<HTMLInputElement>) => {
                  setData({
                    ...data,
                    new_password: e.target.value,
                  });
                },
                [data],
              )}
              value={data.new_password}
            >
              新しいパスワード
            </TextField>
          </Style.ListItem>
          <Style.ListItem>
            <TextField
              type="password"
              onChange={useCallback(
                (e: ChangeEvent<HTMLInputElement>) => {
                  setData({
                    ...data,
                    new_password_confirm: e.target.value,
                  });
                },
                [data],
              )}
              value={data.new_password_confirm}
            >
              新しいパスワード（確認）
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

export default SettingPassword;
