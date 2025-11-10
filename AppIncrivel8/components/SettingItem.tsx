import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'

export default function SettingItem() {
const [active, setActive] = useState<boolean>(false)
  return (
    <View>
      <Text>Modo Escuro {active ? "Ativado" : "Desativado"}</Text>
      <Switch value={active} onValueChange={setActive} trackColor={{false: '#ccc', true:'#666'}} thumbColor={active ? '#fff' : '#333'}/>
    </View>
  )
}

const styles = StyleSheet.create({})