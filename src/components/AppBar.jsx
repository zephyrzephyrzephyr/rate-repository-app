import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { useUserContext } from "../contexts/UserContext";
import LogoutBar from "./LogoutBar";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.appBar,
    paddingLeft: 14,
    paddingBottom: 20,
    flexDirection: "row",
    // ...
  },
  text: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.subheading,
  },
  // ...
});

const AppBar = () => {
  const user = useUserContext();
  console.log("user", user);
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName="Respositories" path="/" />
        {!user && <AppBarTab tabName="Sign In" path="/signIn" />}
        {user && <LogoutBar />}
      </ScrollView>
      {/*  <Pressable style={{ marginRight: 10 }}>
        <Link to="/">
          <Text style={styles.text}>Respositories</Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link to="/signIn">
          <Text style={styles.text}>Sign In</Text>
        </Link>
      </Pressable> */}
    </View>
  );
};

export default AppBar;
