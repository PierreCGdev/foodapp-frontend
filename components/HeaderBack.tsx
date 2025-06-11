import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function HeaderBack({ navigation }: NativeStackHeaderProps) {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, top }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={30} color="back" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingLeft: 18,
    position: "absolute",
    zIndex: 10,
  },
});
