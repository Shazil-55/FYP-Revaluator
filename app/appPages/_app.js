import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Dynamically import Bootstrap JS only on the client side with SSR disabled
const BootstrapScript = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("Bootstrap JS loaded!");
  }, []);

  return (
    <>
      <BootstrapScript />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
