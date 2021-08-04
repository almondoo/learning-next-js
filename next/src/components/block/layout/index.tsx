import React, { ReactNode } from "react";
import Style from "./style";
import Head from "next/head";
import Header from "../header/index";
import Footer from "../footer/index";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ECサイト" />
        <meta property="og:locale" content="ja_JP" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Header />
      <Style.Wrapper>{children}</Style.Wrapper>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
