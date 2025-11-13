import { StyleSheet, Text, View, Switch,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { commonStyles as styles } from '../styles/commonStyles'
import { use } from '../context/ThemeContext'

export function DarkModeButton() {
const {darkTheme, setDarkTheme} = use()
  return (
    <View style={[styles.smallContainer, {backgroundColor: darkTheme ? "#535353ff" : "#bfd7e9ff"}]}>
      <Text style={[styles.text, {color: darkTheme? "white":"black"}]}>Modo Escuro {darkTheme ? "Ativado" : "Desativado"}</Text>
      <Switch value={darkTheme} onValueChange={setDarkTheme} trackColor={{false: '#521713', true:'#21822a'}} thumbColor={darkTheme ? '#2bb539' : '#b5352b'}/>
    </View>
  )
}
export function Notifications(){
  return (
    <View>
      <TouchableOpacity style={styles.btn}><Text style={styles.text}>Notifications</Text></TouchableOpacity>
    </View>
  )
}
export function Exit(){
  return(
    <View>
      <TouchableOpacity style={styles.btn}><Text style={styles.text}>Exit Account</Text></TouchableOpacity>
    </View>
  )
}