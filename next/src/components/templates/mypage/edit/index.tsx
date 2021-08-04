import { useState, useEffect, useCallback, useRef, ChangeEvent } from 'react';
import Style from './style';
import SplitSettingPage from '../../../organisms/splitSettingPage/index';
import Icon from '../../../atoms/icon/index';
import TextField from '../../../atoms/textField/index';
import TextArea from '../../../atoms/textarea/index';
import Button from '../../../atoms/button/index';
import Crop from '../../../atoms/crop/index';
import { User } from '../../../../models/user';

type Props = {
  user: User;
};

const MypageEdit = ({ user, ...props }: Props): JSX.Element => {
  const [data, setData] = useState<User>({
    id: 0,
    name: '',
    uniqueName: '',
    email: '',
    icon: '',
    comment: '',
    isArtist: false,
  });
  const [cropData, setCropData] = useState<string>('');
  const [cropOpen, setCropOpen] = useState<boolean>(false);
  const fileEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setData(user);
  }, [user]);

  const handleSubmit = () => {
    // 更新する
    console.log('更新');
  };

  const handleCrop = useCallback(() => {
    const { current } = fileEl;
    if (current) {
      current.click();
    }
  }, []);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setCropData(String(reader.result)));
      reader.readAsDataURL(e.target.files[0]);
      setCropOpen(true);
      e.target.value = '';
    }
  };

  const handleSetState = (src: string) => {
    setData({ ...data, icon: src });
  };

  return (
    <SplitSettingPage {...props}>
      <Crop
        aspect={1}
        src={cropData}
        open={cropOpen}
        isCircle
        handleClose={() => setCropOpen(false)}
        handleSetState={handleSetState}
      />
      <Style.Main>
        <Style.List>
          <Style.ListItem>
            <Style.ProfileImage onClick={handleCrop}>
              <Icon src={user.icon} alt={user.name} size={100} />
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={onSelectFile}
                ref={fileEl}
              />
              <Style.ProfileImageChagneBtn />
            </Style.ProfileImage>
          </Style.ListItem>
          <Style.ListItem>
            <TextField
              onChange={useCallback(
                (v) => {
                  setData({ ...data, name: v.target.value });
                },
                [data],
              )}
              value={data.name}
            >
              プロフィールの名前
            </TextField>
          </Style.ListItem>
          <Style.ListItem>
            <TextField
              onChange={useCallback(
                (v) => {
                  setData({ ...data, name: v.target.value });
                },
                [data],
              )}
              value={data.name}
            >
              プロフィールの名前
            </TextField>
          </Style.ListItem>
          <Style.ListItem>
            <TextArea
              onChange={useCallback(
                (v: ChangeEvent<HTMLTextAreaElement>): void => {
                  setData({ ...data, name: v.target.value });
                },
                [data],
              )}
              value={data.name}
            >
              プロフィールの名前
            </TextArea>
          </Style.ListItem>
        </Style.List>
        <Style.SaveButton>
          <Button onClick={handleSubmit}>ボタン</Button>
        </Style.SaveButton>
      </Style.Main>
    </SplitSettingPage>
  );
};

export default MypageEdit;
