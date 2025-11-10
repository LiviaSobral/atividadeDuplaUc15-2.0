import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import { User } from './UserInterface';

export interface StackParams extends ParamListBase{
    Home: User,
    Settings: User,
    Profile: User
}

export interface HomeScreenProps {
    navigation: NativeStackNavigationProp<StackParams,"Home">,
    routes:RouteProp<StackParams, "Home">
}

export interface SettingsScreenProps {
    navigation: NativeStackNavigationProp<StackParams,"Settings">,
    routes:RouteProp<StackParams, "Settings">
}

export interface ProfileScreenProps {
    navigation: NativeStackNavigationProp<StackParams,"Profile">,
    routes:RouteProp<StackParams, "Profile">
}