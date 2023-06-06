import { View, Text, Button, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./HomePage";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            title: "Login Screen",
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "white",
          }}>
        <Stack.Screen
          name="Login"
          component={Login}
          
        />
        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Login = (props) => {
  let data = 5555;
  let name = 'Parshotam'
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "red",
        gap: 5,
      }}
    >
      <View >
        <Image source={require("./assets/logo.png")} />
      </View>
      {/* <Text  style={{ fontSize: 30, fontWeight: "800", color: "white" }}>
        GFS IT Solutions
      </Text> */}
      <Button
        title="Go to Homepage"
        onPress={() => props.navigation.navigate("Login2",{age:data,name:name})}
      />
    </View>
  );
};
const Login2 = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "red",
        gap: 5,
      }}
    >
      <View>
        <Image source={require("./assets/logo.png")} />
      </View>
      <Text style={{ fontSize: 30, fontWeight: "800", color: "white" }}>
        GFS IT Solutions
      </Text>
      <Text>data: {props.route.params.name} </Text>
      <Button
        title="Go to Homepage"
        onPress={() => props.navigation.navigate("HomePage")}
      />
    </View>
  );
};

export default App;
