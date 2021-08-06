import { useEffect, useState } from 'react';
import Style from './style';
import { useRouter } from 'next/router';
import { routes } from '../../../utils/routes';
import Link from '../../atoms/link/index';

const BreadCrumb = () => {
  const [breads, setBreads] = useState<string[]>([]);
  const router = useRouter();
  // console.log(router);
  useEffect(() => {
    const path = router.asPath;
    const escapeRoutes = Object.keys(routes).map((v) => {
      return '/' + routes[v].replace(/\//g, '/') + '/';
    });
    switch (true) {
      case path.match(escapeRoutes):
        break;
    }
  }, [router.asPath]);

  return (
    <Style.Wrapper>
      {breads.map((v, i) => (
        <Link href={v} key={i}>
          {v}
        </Link>
      ))}
    </Style.Wrapper>
  );
};

export default BreadCrumb;
