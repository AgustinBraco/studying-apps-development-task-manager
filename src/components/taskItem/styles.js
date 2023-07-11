import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 35,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  itemText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: '#FFF',
    paddingLeft: 3,
  }
});