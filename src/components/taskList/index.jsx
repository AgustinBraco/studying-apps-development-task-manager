import { FlatList } from "react-native";
import { styles } from "./styles.js";

const TaskInput = ({
	tasks,
	renderItem,
}) => {
	return (
		<FlatList
			data={tasks}
			renderItem={renderItem}
			style={styles.itemsContainer}
			contentContainerStyle={styles.itemsFlatList}
			alwaysBounceVertical={false}
			keyExtractor={(item) => item.id}
		/>
	);
};


export default TaskInput;
