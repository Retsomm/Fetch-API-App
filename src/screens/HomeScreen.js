import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function HomeScreen(props) {
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState(""); // 儲存關鍵字狀態
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    const REQUEST_URL =
      "https://data.moa.gov.tw/Service/OpenData/TactriMbox.aspx";

    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        const uniqueCases = {};

        const filteredData = responseData.filter((cases) => {
          // 用於篩選API的重複資料
          if (
            !uniqueCases[cases.問題] &&
            (cases.問題.includes(searchText) || cases.回答.includes(searchText))
          ) {
            uniqueCases[cases.問題] = true;
            return true;
          }
          return false;
        });

        setDataSource(filteredData);
      })
      .catch((err) => {
        console.log("err 是", err);
      });
  };

  const showNoticeDetail = (cases) => {
    props.navigation.push("MarsDetail", { passProps: cases });
  };

  const renderBook = (cases) => {
    if (!cases.問題.includes(searchText) && !cases.回答.includes(searchText)) {
      return null; // 如果不包含關鍵字，則不渲染在畫面上
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <TouchableOpacity onPress={() => showNoticeDetail(cases)}>
          <View>
            <View style={styles.MainView}>
              <View style={{ flex: 1 }}>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={2}
                  style={{ color: "black", fontSize: 15, marginTop: 8 }}
                >
                  問題：{cases.問題}
                </Text>
                <Text style={{ color: "black", fontSize: 15, marginTop: 8 }}>
                  日期：{cases.日期}
                </Text>
              </View>
              <Image source={require("../img/arrow-point-to-right.png")} />
            </View>
            <View style={styles.seperator} />
          </View>
        </TouchableOpacity>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View>
      {/*  輸入框 */}
      <TextInput
        style={styles.searchInput}
        placeholder="輸入關鍵字搜尋"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <FlatList
        data={dataSource}
        renderItem={({ item, index }) => renderBook(item, index)}
        keyExtractor={(item, index) => index.toString()}
        style={{ backgroundColor: "white" }}
      />
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
  MainView: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 8,
    marginLeft: 10,
  },
  seperator: {
    height: 1,
    backgroundColor: "#dddddd",
  },
  thumbnail: {
    width: 50,
    height: 60,
    marginRight: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
});
