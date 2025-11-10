import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { commonStyles as styles} from './styles/commonStyles'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}


