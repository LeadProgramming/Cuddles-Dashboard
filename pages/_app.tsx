import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import store from '../redux/store';
type MyAppProps = {
    Component: React.FunctionComponent;
    pageProps: unknown;
    children: React.ReactNode;
};

let theme = createMuiTheme({});
theme = responsiveFontSizes(theme);

const MyApp: React.FunctionComponent = ({ Component, pageProps }: MyAppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CssBaseline />
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    );
};

export default MyApp;
