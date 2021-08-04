import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useState, useEffect } from 'react';
import Style from './style';

//日付から文字列に変換する関数
const getStringFromDate = (date: Date): string => {
  const year_str = String(date.getFullYear());
  //月だけ+1すること
  const month_str = String(1 + date.getMonth());
  const day_str = String(date.getDate());
  const hour_str = String(date.getHours());
  const minute_str = String(date.getMinutes());
  const second_str = String(date.getSeconds());

  let format_str = 'YYYY-MM-DD hh:mm:ss';
  format_str = format_str.replace(/YYYY/g, year_str);
  format_str = format_str.replace(/MM/g, month_str);
  format_str = format_str.replace(/DD/g, day_str);
  format_str = format_str.replace(/hh/g, hour_str);
  format_str = format_str.replace(/mm/g, minute_str);
  format_str = format_str.replace(/ss/g, second_str);

  return format_str;
};

const Overlay = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const getDate = localStorage.getItem('FirstRenderingDate');
    const date = new Date();
    if (!getDate || new Date(getDate) > date) {
      date.setDate(date.getDate() + 1);
      localStorage.setItem('FirstRenderingDate', getStringFromDate(date));
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }
  }, []);

  return (
    <Style.Wrapper isVisible={isVisible}>
      <Style.Text>FIRST ART</Style.Text>
    </Style.Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log('ok');
  console.log(ctx.req.headers.cookie);

  return {
    props: {},
  };
};

export default Overlay;
