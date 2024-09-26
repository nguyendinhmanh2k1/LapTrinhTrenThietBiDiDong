import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image } from "react-native";
import MainButton from "../../components/MainButton";

export default function ProfileScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem("curUser");
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  const logOut = async () => {
    await AsyncStorage.removeItem("curUser");
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  };
  useEffect(() => {
    getUserData(user);
  }, []);
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        paddingTop: StatusBar.currentHeight + 30,
        paddingHorizontal: 12,
      }}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        {/* ảnh autu khi đăng nhập của từng user */}
        <Image
          style={{
            height: 120,
            width: 120,
            borderRadius: 100,
          }}
          source={{ uri: "https://i.pravatar.cc/300" }}
        />
        <Text
          style={{
            marginTop:100,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
        - Tên : {user && user.name}
        </Text>
        <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
        >
        - Mật khẩu: {user && user.password}
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
        - Email :  {user && user.email}.gmail.com
        </Text>
        {/* <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            paddingBottom: 12,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              flex: 1,
              textAlign: "center",
            }}
          >
            {"Đang Giao"}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              flex: 1,
              textAlign: "center",
            }}
          >
            {"Đã Giao"}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              flex: 1,
              textAlign: "center",
            }}
          >
            {"Đã Hủy"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#2FDBBC",
              fontSize: 25,
              flex: 1,
              textAlign: "center",
            }}
          >
            {"00"}
          </Text>
          <Text
            style={{
              color: "#2FDBBC",
              fontSize: 25,
              flex: 1,
              textAlign: "center",
            }}
          >
            {"00"}
          </Text>
          <Text
            style={{
              color: "#2FDBBC",
              fontSize: 25,
              flex: 1,
              textAlign: "center",
            }}
          >
            {"00"}
          </Text>
        </View> */}
      </View>
      <MainButton
        onPress={logOut}
        style={{ backgroundColor: "red", marginBottom: 100 }}
        title={"Đăng Xuất"}
      />
    </View>
  );
}
