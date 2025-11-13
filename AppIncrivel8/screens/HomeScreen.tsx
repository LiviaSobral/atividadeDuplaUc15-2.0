import { View, Button, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { HomeScreenProps } from "../interfaces/NavigationTypes";
import { User } from "../interfaces/UserInterface";
import UserCard from "../components/UserCard";
import { commonStyles as styles } from "../styles/commonStyles";
import { use } from "../context/ThemeContext";

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { darkTheme } = use();
  const defaultUser: User = {
    name: "Leo Senac",
    email: "LeoSenac@mail",
    cidade: "São Leopoldo",
    estado: "Rio Grande Do Sul",
  };
  const [user, setUser] = useState(defaultUser);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkTheme ? "#535353ff" : "#a7cdeb" },
      ]}
    >
      <UserCard user={user} />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Profile", { user, setUser })}
      >
        <Text style={styles.text}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
