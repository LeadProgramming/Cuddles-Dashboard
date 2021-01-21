import '../styles/globals.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';

import store from '../redux/store.js';
function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <CssBaseline />
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
