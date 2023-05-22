import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@src/theme";
import createEmotionCache from "@src/createEmotionCache";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

import NavBar from "@src/components/NavBar/NavBar";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  session: SessionProviderProps["session"];
}

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    session,
    pageProps,
  } = props;

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // default: true
          },
        },
      })
  );

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools /> */}
        <Hydrate state={pageProps.dehydratedState}>
          <CacheProvider value={emotionCache}>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
                title="Concierge"
              />
            </Head>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <NavBar />
              <Component {...pageProps} />
            </ThemeProvider>
          </CacheProvider>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}
