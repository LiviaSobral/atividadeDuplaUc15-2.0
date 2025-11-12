import { StyleSheet, Text, View, Switch,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export function DarkModeButton() {
const [active, setActive] = useState<boolean>(false)
  return (
    <View>
      <Text>Modo Escuro {active ? "Ativado" : "Desativado"}</Text>
      <Switch value={active} onValueChange={setActive} trackColor={{false: '#521713', true:'#21822a'}} thumbColor={active ? '#2bb539' : '#b5352b'}/>
    </View>
  )
}
export function Notifications(){
  return (
    <View>
      <TouchableOpacity><Text>Notifications</Text></TouchableOpacity>
    </View>
  )
}
export function Exit(){
  return(
    <View>
      <TouchableOpacity><Text>Exit Account</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})