import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import { User } from './UserInterface';

export interface StackParams extends ParamListBase{
    Home: {user:User},
    Settings: undefined,
    Profile: {user:User}
}

export interface HomeScreenProps {
    navigation: NativeStackNavigationProp<StackParams,"Home">,
    route:RouteProp<StackParams, "Home">
}

export interface SettingsScreenProps {
    navigation: NativeStackNavigationProp<StackParams,"Settings">
}

export interface ProfileScreenProps {
    navigation: NativeStackNavigationProp<StackParams,"Profile">,
    route:RouteProp<StackParams, "Profile">
}