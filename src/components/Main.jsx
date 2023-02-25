import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import { Route, Routes, Navigate } from "react-router-native";
import SignIn from "./SignIn";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";
import UserContext from "../contexts/UserContext";

const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
});

const Main = () => {
  const { data } = useQuery(GET_ME);
  console.log(data);
  return (
    <View style={styles.container}>
      <UserContext.Provider value={data?.me}>
        <AppBar />
        <Routes>
          <Route path="/" element={<RepositoryList />} exact />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserContext.Provider>
    </View>
  );
};

export default Main;
