import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { commonStyles as styles} from './styles/commonStyles'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StackNavigator from './navigation/StackNavigator';
import { Provider } from './context/ThemeContext';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Provider>
          <StackNavigator/>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


