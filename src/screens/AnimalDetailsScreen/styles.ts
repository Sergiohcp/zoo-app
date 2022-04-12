import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "flex-start",
    paddingHorizontal: 24,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 24,
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    marginTop: 16,
  },
  textLeft: {
    fontSize: 16,
    marginTop: 16,
    fontWeight: "bold",
    color: "green",
  },
  textRight: {
    fontSize: 16,
    marginTop: 16,
  },
});
