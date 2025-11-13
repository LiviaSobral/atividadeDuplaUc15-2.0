import { View, TextInput, Button } from 'react-native'
import React from 'react'
import { ProfileScreenProps } from '../interfaces/NavigationTypes'
import { User } from '../interfaces/UserInterface';
import { commonStyles as styles } from '../styles/commonStyles'
import { use } from '../context/ThemeContext';

export default function EditProfileScreen({ navigation, route }: ProfileScreenProps) {
  const { user,setUser } = route.params; 
  let user2:User = {name:user.name, email:user.email, cidade:user.cidade, estado:user.estado}
  const {darkTheme} = use()
  return (
    <View style={[styles.container, {backgroundColor: darkTheme ? "#333" : "#fff"}]}>
      <TextInput style={styles.imput} defaultValue={user.name} onChangeText={(text) =>{user2.name = text}}/>
      <TextInput style={styles.imput} defaultValue={user.email} onChangeText={(text) =>{user2.email = text}}/>
      <TextInput style={styles.imput} defaultValue={user.cidade} onChangeText={(text) =>{user2.cidade = text}}/>
      <TextInput style={styles.imput} defaultValue={user.estado} onChangeText={(text) =>{user2.estado = text}}/>
      <Button title='Salvar e voltar' onPress={() => {setUser(user2), navigation.navigate('Home')}}/>
    </View>
  )
}
