import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import AppLayout from "@/components/Layout/AppLayout";
import { SessionProvider } from "next-auth/react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps, session }: any) {
  const getLayout =
    Component.getLayout ??
    ((page: ReactElement) => <AppLayout>{page}</AppLayout>);

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}
