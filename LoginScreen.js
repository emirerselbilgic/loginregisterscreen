import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }) {
  const [loginemail, setloginemail] = useState("");
  const [loginpassword, setloginpassword] = useState("");

  // function trylogin() {
  //   console.log(loginemail);
  //   console.log(loginpassword);
  //   Axios.post("http://ip:port/checkUser", {
  //     loginemail,
  //     loginpassword,
  //   }).then((response) => {
  //     console.log(response.data);
  //     if (response.data === "Login Successful") {
  //       navigation.navigate("MyTabs");
  //     }
  //   });
  // }

  function trylogin() {
    navigation.navigate("RegisterScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            textShadowColor: "black",
            textShadowRadius: 4,
            textAlign: "center",
            color: "black",
          }}
        ></Text>
        <Image
          source={require("../assets/welcome.jpg")}
          style={{
            width: "120%",
            height: "100%",
          }}
        ></Image>
      </View>
      <View style={styles.login}>
        <View style={styles.loginheader}>
          <Text
            style={{
              fontSize: 25,
              color: "white",
            }}
          >
            Tekrar Hoşgeldin...
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Bugün Nasılsın?
          </Text>
        </View>
        <View style={styles.loginsection}>
          <View style={styles.logincard}>
            <View style={styles.inputwithicon}>
              <View style={styles.icon}>
                <Icon name="envelope" color="#F05675" size={18} />
              </View>

              <TextInput
                style={styles.input}
                onChangeText={(e) => {
                  setloginemail(e);
                }}
                placeholder="E-mail:"
                keyboardType="email-address"
              />
            </View>
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#F05675" }}
            ></View>
            <View style={styles.inputwithicon}>
              <View style={styles.icon}>
                <Icon name="key" color="#F05675" size={18} />
              </View>
              <TextInput
                style={styles.input}
                onChangeText={(e) => {
                  setloginpassword(e);
                }}
                secureTextEntry={true}
                placeholder="Şifre:"
              />
            </View>
          </View>
          <View style={styles.forgotpassword}>
            <Text
              style={{
                color: "white",
                fontSize: 15,
              }}
            >
              Şifremi Unuttum
            </Text>
          </View>
        </View>

        <View style={styles.loginfooter}>
          <TouchableOpacity
            style={styles.signinbutton}
            onPress={() => {
              trylogin();
            }}
          >
            <Text
              style={{
                fontSize: 15,

                color: "white",
                alignSelf: "center",
              }}
            >
              Giriş Yap
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
          >
            <View style={styles.signuptext}>
              <Text
                style={{
                  fontSize: 15,

                  color: "white",
                  marginTop: 20,
                }}
              >
                Hesabın yok mu? Kaydol
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  header: {
    flex: 1,
    width: "60%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginsection: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  login: {
    height: "60%",
    width: "100%",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: "#F05675",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  loginheader: {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "80%",
  },
  logincard: {
    width: "80%",
    height: 100,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: "space-between",
    borderRadius: 20,
  },
  input: {
    color: "#023047",
    fontSize: 15,
    flex: 1,
  },
  icon: {
    justifyContent: "center",
    paddingRight: 12,
  },
  inputwithicon: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  forgotpassword: {
    width: "80%",
    flexDirection: "row",
    marginTop: 4,
    paddingHorizontal: 15,
    justifyContent: "flex-end",
  },
  loginfooter: {
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
  },
  signinbutton: {
    width: "80%",
    backgroundColor: "#F7B666",
    flexDirection: "column",
    justifyContent: "center",
    height: 40,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  signuptext: {
    width: "70%",
    flexDirection: "column",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
});
