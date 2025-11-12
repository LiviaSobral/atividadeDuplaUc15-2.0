import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { ProfileScreenProps } from '../interfaces/NavigationTypes'
import { User } from '../interfaces/UserInterface';
import { commonStyles as styles } from '../styles/commonStyles'

export default function EditProfileScreen({ navigation, route }: ProfileScreenProps) {
  let { user } = route.params;
  let user2:User = {name:user.name, email:user.email, cidade:user.cidade, estado:user.estado}
  return (
    <View>
      <TextInput value={user2.name} onChangeText={(text) =>{user2.name = text}}/>
      <TextInput value={user2.email} onChangeText={(text) =>{user2.email = text}}/>
      <TextInput value={user2.cidade} onChangeText={(text) =>{user2.cidade = text}}/>
      <TextInput value={user2.estado} onChangeText={(text) =>{user2.estado = text}}/>
      <Button title='Salvar e voltar' onPress={() => navigation.navigate('Home', {user:{name:user2.name, email:user2.email,cidade:user2.cidade,estado:user2.estado}})}/>
      <Button title='Voltar' onPress={() => navigation.navigate('Home',{user})}/>
    </View>
  )
}
