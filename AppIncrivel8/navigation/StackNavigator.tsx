import { createStackNavigator } from '@react-navigation/stack';
import { StackParams } from '../interfaces/NavigationTypes';
import TabNavigator from './TabNavigator';
import EditProfileScreen from '../screens/EditProfileScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator<StackParams>();

export default function StackNavigator(){
    return (
      <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Tabs" component={TabNavigator} options={{headerShown:false}}/>
         <Stack.Screen name="Profile" component={EditProfileScreen} options={{ title:"Edit Profile"}} />
      </Stack.Navigator>
      </NavigationContainer>
    )
}