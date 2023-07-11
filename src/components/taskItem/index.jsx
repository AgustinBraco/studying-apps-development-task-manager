import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles.js";

const TaskItem = ({ item, onHandleModal }) => {
	return (
		<TouchableOpacity
			style={
				styles.itemContainer}
			onPress={() => onHandleModal(item)}
		>
			<Text
				style={
					styles.itemText}
			>
				{item.value}
			</Text>
		</TouchableOpacity>
	);
};

export default TaskItem;
