import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParams } from '../interfaces/NavigationTypes';

const Stack = createNativeStackNavigator<StackParams>();

export default function StackNavigator(){
    return (
        <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={} />
//         <Stack.Screen name="Profile" component={} />
//         <Stack.Screen name='Settings' component={}/>
//       </Stack.Navigator>
//     </NavigationContainer>
    )
}