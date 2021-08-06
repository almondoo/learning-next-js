import Template from '../../components/templates/mypage/index/index';
import { Author } from '../../models/user';

const author: Author = {
  id: 1,
  artsit_genre: {
    id: 1,
    name: '画家',
  },
  name: '森川',
  unique_name: 'aduglae',
  email: 'tsubasa.engineer@gmail.com',
  icon: '/images/category/drawing.jpeg',
  comment: '森川です。',
  is_artist: false,
  follows: ['a', 'b', 'c'],
  followers: ['a', 'b', 'c', 'd'],
};

const Login = () => {
  return <Template author={author} />;
};

export default Login;
