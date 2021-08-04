import "../styles/reset.css";
//- slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//- slick
//- simplebar
import "simplebar/dist/simplebar.min.css";
import "../styles/simplebar.scss";
//- simplebar
//- react-image-crop
import "react-image-crop/dist/ReactCrop.css";
//- react-image-crop
import { useEffect } from "react";
import { getCsrfApi } from "../api/fetch/csrf";
import { SWRConfig, Revalidator } from "swr";
import Layout from "../components/block/layout/index";
import type { AppProps } from "next/app";
import type { RevalidatorOptions } from "swr/dist/types";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    getCsrfApi()
      .then(() => {
        //- ok
      })
      .catch(() => {
        //- ng
      });
  }, []);
  return (
    <Layout>
      <SWRConfig
        value={{
          dedupingInterval: 600000,
          revalidateOnFocus: false,
          onErrorRetry: (
            error: { status: number },
            key: string,
            config,
            revalidate: Revalidator,
            { retryCount }: Required<RevalidatorOptions>
          ): void => {
            //- 404は再試行しない
            if (error.status === 404) return;

            if (retryCount >= 5) return;

            //- 5秒後に再試行
            setTimeout(() => revalidate({ retryCount }), 3000);
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  );
}

export default MyApp;
