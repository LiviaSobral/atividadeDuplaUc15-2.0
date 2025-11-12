import { StyleSheet, Text, View, Button,Image } from 'react-native'
import React from 'react'
import { HomeScreenProps } from '../interfaces/NavigationTypes';
import { User } from '../interfaces/UserInterface';
import UserCard from '../components/UserCard';
import { commonStyles as styles } from '../styles/commonStyles'

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
   // let { user } = route.params;  
   // if(!user)  {
      const user: User = {name:"Leo Senac", email:"LeoSenac@mail", cidade:"São Leopoldo", estado:"Rio Grande Do Sul"}
     // user = userDefault
//}
    
  return (
    <View style={styles.container}>
      <UserCard user={user}/>
      <Button title='Editar Perfil' onPress={() => navigation.navigate('Profile', {user})}/>
    </View>
  )
}
