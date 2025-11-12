import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackParams } from '../interfaces/NavigationTypes';
import HomeScreen from '../screens/HomeScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { use } from '../context/ThemeContext';

const Tab = createBottomTabNavigator<StackParams>();


export default function TabNavigator(){
  const {darkTheme} = use()
  let color = "#333"
  {darkTheme ? color="#333" : color="#fff"}
    return(
       <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor:"#FF6B00", tabBarActiveBackgroundColor:`${color}`,tabBarInactiveBackgroundColor:`${color}`}}>
         <Tab.Screen name="Home" component={HomeScreen} />
         <Tab.Screen name="Settings" component={SettingsScreen} />
         <Tab.Screen name="Profile" component={EditProfileScreen} />
       </Tab.Navigator>
    )
}