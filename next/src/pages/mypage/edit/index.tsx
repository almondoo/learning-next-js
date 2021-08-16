import Template from '../../../components-v2/templates/mypage/edit/index';
import { User } from '../../../models/user';

const user: User = {
  id: 1,
  name: 'tsubasa',
  uniqueName: 'unique_tsubasa',
  email: 'tsubasa.engineer@gmail.com',
  icon: '/images/category/drawing.jpeg',
  comment: 'コメントコメント',
  isArtist: false,
};

const MypageEdit = () => {
  return <Template user={user} />;
};

export default MypageEdit;
