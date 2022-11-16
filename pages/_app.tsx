import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);

  return (
    <div>
    <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </div>
  )
}

export default MyApp;