import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#A5C9CA',
  },
  body: {
    flex: 1,
    backgroundColor: '#A5C9CA',
    paddingTop: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  inputText: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 5
  },
  itemsContainer: {
    flex: 1,
    backgroundColor: '#A5C9CA',
    paddingTop: 30,
  },
  itemsFlatList: {
    gap: 15,
  },
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
    paddingLeft: 3,
  },
  itemDone: {
    flex: 0.1,
    padding: 5,
    textAlign: "center",
    fontSize: 24,
    marginHorizontal: 3,
    color: "green",
  },
  itemClose: {
    flex: 0.1,
    padding: 5,
    textAlign: "center",
    fontSize: 24,
    marginHorizontal: 3,
    color: "red",
  },
  modalContainer: {

  },
  modalTextsContainer: {

  },
  modalTitle: {

  },
  modalText: {

  },
  modalDelete: {

  },
  modalDone: {

  },
  modalClose: {

  },
  modalDeleteText: {

  },
  modalDoneText: {

  },
  modalCloseText: {

  },
});