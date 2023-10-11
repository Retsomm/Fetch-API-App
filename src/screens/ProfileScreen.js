import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as StorageHelper from "../helpers/StorageHelper";

export default function ProfileScreen(props) {
  // const [myBookCount, setMyBookCount] = useState(0);
  // const [myBookListName, setMyBookListName] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = props.navigation.addListener("focus", () => {
  //     loadStorage();
  //   });
  //   return unsubscribe;
  // }, [myBookCount]);
  // const loadStorage = async () => {
  //   let bookGet = await StorageHelper.getMySetting("myList");
  //   //法二
  //   let a = JSON.parse(bookGet);
  //   setMyBookCount(a.length);
  //   setMyBookListName(a);
  // };

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      {/* <Text>我收藏了{myBookCount}個寵物認養</Text>
      {/* 法二渲染 */}
      {/* {myBookListName.map((pet, index) => {
        return (
          <Text key={index}>
            認養寵物為：{pet.animal_colour + "的" + pet.animal_kind}
          </Text>
        );
      })} 
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
