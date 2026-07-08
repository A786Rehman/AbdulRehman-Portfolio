// import Head from "next/head";
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="oDBjgx6N6rK4gEWaMQgnySGHCFKl_Nu0X3FgVvfIsao"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}