import Style from './style';
import Icon from '../../atoms/icon/index';
import Link from '../../atoms/link';
import { ArtistCategory } from '../../../models/artistCategory';

type Props = {
  category: ArtistCategory;
  name: string;
  uniqueName: string;
  icon: string;
};
const ArtBlockHeader = ({ category, name, uniqueName, icon, ...props }: Props) => {
  return (
    <Style.Wrapper {...props}>
      <Link href={`/artist/${uniqueName}`} isUnderline={false}>
        <Style.Block>
          <Icon src={icon} alt={name} size={50} />
          <Style.AuthorInfo>
            <Style.Position>{category.name}</Style.Position>
            <Style.AuthorName>{name}</Style.AuthorName>
          </Style.AuthorInfo>
        </Style.Block>
      </Link>
    </Style.Wrapper>
  );
};

export default ArtBlockHeader;
