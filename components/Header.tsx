import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import type { DrawerHeaderProps } from "@react-navigation/drawer";

export default function Header({ navigation }: DrawerHeaderProps) {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, top }}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="menu-outline" size={30} color="#655074" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingLeft: 18,
    position: "absolute",
  },
});
