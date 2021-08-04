import Style from './style';
import Link from '../../../atoms/link/index';
import Icon from '../../../atoms/icon/index';
import SplitSettingPage from '../../../organisms/splitSettingPage/index';
import { Author } from '../../../../models/user';

type Props = {
  author: Author;
};

const Mypage = ({ author, ...props }: Props): JSX.Element => {
  return (
    <SplitSettingPage>
      <Style.Author {...props}>
        <Icon
          src={author.icon || '/images/svg/user-circle.svg'}
          alt={`${author.name}の画像`}
          size={70}
        />
        <Style.AuthorBlock>
          <Style.Name>{author.name}</Style.Name>
          <Link href="/mypage/edit">
            <Style.Link>プロフィールを確認・変更</Style.Link>
          </Link>
        </Style.AuthorBlock>
        <Style.FollowDataList>
          <Style.FollowDataListItem>
            <Link href="/mypage/follower" isUnderline={false}>
              <Style.Number>{author.followers.length}</Style.Number>
              <Style.Text>フォロワー</Style.Text>
            </Link>
          </Style.FollowDataListItem>
          <Style.FollowDataListItem>
            <Link href="/mypage/follow" isUnderline={false}>
              <Style.Number>{author.follows.length}</Style.Number>
              <Style.Text>フォロー</Style.Text>
            </Link>
          </Style.FollowDataListItem>
        </Style.FollowDataList>
      </Style.Author>
    </SplitSettingPage>
  );
};

export default Mypage;
