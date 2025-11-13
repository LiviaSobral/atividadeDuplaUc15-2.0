import { View } from 'react-native'
import React from 'react'
import { use } from '../context/ThemeContext'
import {DarkModeButton, Notifications,Exit} from '../components/SettingItem'
import { SettingsScreenProps } from '../interfaces/NavigationTypes'
import { commonStyles as styles } from '../styles/commonStyles'

export default function SettingsScreen({ navigation }: SettingsScreenProps) {
  const {darkTheme} = use()

  return (
    <View style={[styles.container, {backgroundColor: darkTheme ? "#535353ff" : "#a7cdeb"}]}>
      <DarkModeButton/>
      <Notifications/>
      <Exit/>
    </View>
  )
}
