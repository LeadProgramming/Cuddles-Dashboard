import { muiTheme } from 'storybook-addon-material-ui';
import { Provider } from 'react-redux';
import store from '../redux/store';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
export const decorators = [Story => <Provider store={store}><Story /></Provider>]

