import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackParams } from '../interfaces/NavigationTypes';
import HomeScreen from '../screens/HomeScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { use } from '../context/ThemeContext';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator<StackParams>();


export default function TabNavigator(){
  const {darkTheme} = use()
  let color = "#4d4d4dff"
  {darkTheme ? color="#4d4d4dff" : color="#bfd7e9ff"}
    return(
       <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor:"#FF6B00", tabBarActiveBackgroundColor:`${color}`,tabBarInactiveBackgroundColor:`${color}`}}>
         <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: () =>(
            <Image source={{uri: "https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png"}}
            style={{height:23, width:24}}></Image>
          )
         }} />
         <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarIcon: () =>(
            <Image source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/034/132/654/small/3d-cogwheel-gear-settings-icon-illustration-png.png"}}
            style={{height:23, width:24}}></Image>
          ) 
         }}/>
         <Tab.Screen name="Profile" component={EditProfileScreen} options={{
          tabBarIcon: () => (
            <Image source={{uri: "https://static.vecteezy.com/system/resources/previews/036/885/313/non_2x/blue-profile-icon-free-png.png"}}
            style={{height:23, width:24}}></Image>
          )
         }} />
       </Tab.Navigator>
    )
}