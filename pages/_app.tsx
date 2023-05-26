import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import AppLayout from "@/components/Layout/AppLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "@/config/env";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
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
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        {getLayout(<Component {...pageProps} />)}
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}
