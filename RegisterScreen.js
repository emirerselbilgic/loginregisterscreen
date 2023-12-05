import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function RegisterScreen({ navigation }) {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [email, setemail] = useState("");
  let emailLength = email.length;
  const [username, setusername] = useState("");
  let usernameLength = username.length;
  const [password, setpassword] = useState("");
  let passwordLength = password.length;
  const [password2, setpassword2] = useState("");

  function createUser() {
    if (
      usernameLength > 4 &&
      passwordLength > 4 &&
      emailLength > 4 &&
      password === password2
    ) {
      // Axios.post("http://192.168.1.105:5000/createUser", {
      //   email,
      //   username,
      //   password,
      // }).then((response) => {
      //   setListOfUsers([
      //     ...listOfUsers,
      //     {
      //       email,
      //       password,
      //       username,
      //     },
      //   ]);
      // });
    }
    navigation.navigate("LoginScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.register}>
        <View style={styles.registerheader}>
          <Text
            style={{
              fontSize: 25,

              color: "white",
            }}
          >
            Sağlık için...
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Son bir adım.
          </Text>
        </View>
        <View style={styles.registersection}>
          <View style={styles.registercard}>
            <View style={styles.inputwithicon}>
              <View style={styles.icon}>
                <Icon name="envelope" color="#F05675" size={18} />
              </View>

              <TextInput
                style={styles.input}
                onChangeText={setemail}
                placeholder="E-mail:"
                keyboardType="email-address"
              />
            </View>
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#F05675" }}
            ></View>
            <View style={styles.inputwithicon}>
              <View style={styles.icon}>
                <Icon name="address-card" color="#F05675" size={18} />
              </View>
              <TextInput
                style={styles.input}
                onChangeText={setusername}
                placeholder="Kullanıcı Adı:"
              />
            </View>
          </View>
          <View style={styles.registercard}>
            <View style={styles.inputwithicon}>
              <View style={styles.icon}>
                <Icon name="key" color="#F05675" size={18} />
              </View>
              <TextInput
                style={styles.input}
                onChangeText={setpassword}
                secureTextEntry={true}
                placeholder="Şifre:"
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
                onChangeText={setpassword2}
                secureTextEntry={true}
                placeholder="Şifre Tekrar:"
              />
            </View>
          </View>
        </View>

        <View style={styles.registerfooter}>
          <TouchableOpacity style={styles.signinbutton} onPress={createUser}>
            <Text
              style={{
                fontSize: 15,
                color: "white",
                alignSelf: "center",
              }}
            >
              Kayıt Ol
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LoginScreen");
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
                Zaten hesabın var mı?
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
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  registersection: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  register: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F05675",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  registerheader: {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "80%",
  },
  registercard: {
    width: "80%",
    height: 100,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
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
  registerfooter: {
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
});
