import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeDetailScreen(props) {
  const passProps = props.route.params.passProps || "nothing get";
  return (
    <View style={styles.container}>
      <Text style={{ margin: 20 }}>類別：{passProps.類別}</Text>
      <Text style={{ margin: 20, lineHeight: 20 }}>問題：{passProps.問題}</Text>
      <Text style={{ margin: 20, lineHeight: 20 }}>回答：{passProps.回答}</Text>
      <Button title="go back" onPress={() => props.navigation.pop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
  },
});
