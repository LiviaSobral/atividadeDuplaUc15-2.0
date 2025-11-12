import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { User } from '../interfaces/UserInterface'
import { commonStyles as styles } from '../styles/commonStyles'

export default function UserCard(props:{user:User}) {
  return (
    <View>
      <Image style={styles.pic} source={{uri: "https://s2-g1.glbimg.com/-L0IuXlPVQ7zGJgQKj7CDUx2cKg=/0x0:1080x1274/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/4/B/w8cUpMRWKWWpjU786QuA/whatsapp-image-2023-09-06-at-17.17.16.jpeg"}}/>
      <Text style={styles.text}>{props.user.name}</Text>
      <Text style={styles.text}>{props.user.email}</Text>
      <Text style={styles.text}>{props.user.cidade}</Text>
      <Text style={styles.text}>{props.user.estado}</Text>
    </View>
  )
}
