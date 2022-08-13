import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import "../node_modules/react-modal-video/scss/modal-video.scss";
import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
