/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import '../styles/deck.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
