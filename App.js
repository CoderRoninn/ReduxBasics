import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';
/**
 * App Component
 * Main application component with navigation container
 */

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
