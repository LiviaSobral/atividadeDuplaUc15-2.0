import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackParams } from '../interfaces/NavigationTypes';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<StackParams>();

export default function tabNavigator(){
    return(
        <NavigationContainer>
       <Tab.Navigator
         screenOptions={({ route }) => ({
           tabBarIcon: ({ color, size }) => {
             let iconName;
             if (route.name === 'Home') iconName = 'home-outline';
             if (route.name === 'Settings') iconName = 'help-outline';
             if(route.name === 'Profile') iconName = "person-outline"
             return <Ionicons name={iconName} size={size} color={color} />;
           },
           tabBarActiveTintColor:"blue",
           tabBarInactiveTintColor:"gray",
           tabBarStyle:{height: 60},
           tabBarLabelStyle:{fontSize:14},
      })}
       >
         <Tab.Screen name="Home" component={} />
         <Tab.Screen name="Settings" component={} />
         <Tab.Screen name="Profile" component={} />
       </Tab.Navigator>
     </NavigationContainer>
    )
}