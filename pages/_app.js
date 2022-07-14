import 'bootstrap/dist/css/bootstrap.min.css';
import 'pe7-icon/dist/dist/pe-icon-7-stroke.min.css';
import '../components/Footer/Footer.css';
import '../components/Header/Header.css';
import '../components/MenuMobile/MenuMobile.css';
import '../components/ProductItem/ProductItem.css';
import '../components/Topbar/Topbar.css';
import '../styles/SingleProductDetails.css'
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css'
import NProgress from 'nprogress';
import Router from 'next/router';
import { CartProvider } from 'react-use-cart';


NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

