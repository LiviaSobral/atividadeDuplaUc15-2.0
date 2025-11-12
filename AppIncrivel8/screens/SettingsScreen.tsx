import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { use } from '../context/ThemeContext'
import {DarkModeButton, Notifications,Exit} from '../components/SettingItem'

export default function SettingsScreen() {
  const {darkTheme} = use()

  return (
    <View>
      <DarkModeButton/>
      <Notifications/>
      <Exit/>
    </View>
  )
}

const styles = StyleSheet.create({})