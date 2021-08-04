import { ReactNode } from 'react';
import Style from './style';

/**
 * 未完成
 */

// const moveValue = 300;

type TypeTabs = {
  children: ReactNode;
};

export const Tabs = ({ children, ...props }: TypeTabs) => {
  // const [left, setLeft] = useState<string>('0');
  const left = '0';
  return (
    <>
      <Style.Tabs {...props}>{children}</Style.Tabs>
      <Style.BorderSlider left={left} />
    </>
  );
};

type TypeTab = {
  index: number;
  tabIndex: number;
  children: ReactNode;
};

export const Tab = ({ index, tabIndex, children, ...props }: TypeTab) => {
  return (
    <Style.Tab
      id={`simple-tab-${index}`}
      aria-controls={`simple-tabpanel-${index}`}
      isSelect={tabIndex === index ? true : false}
      {...props}
    >
      {children}
    </Style.Tab>
  );
};
