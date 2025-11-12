import { Text } from 'react-native'
import { commonStyles as styles} from './styles/commonStyles'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StackNavigator from './navigation/StackNavigator';
import { Provider } from './context/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaView style={{flex:1}}>
          <Provider>
           <StackNavigator/>
          </Provider>
        </SafeAreaView>
      </SafeAreaProvider>
    
  );
}


