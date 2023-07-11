import { View, TextInput, Button } from "react-native";
import { styles } from "./styles.js";

const TaskInput = ({
	backgroundColor,
	onHandlerFocus,
	onHandlerBlur,
	onHandlerChangeText,
	task,
	onHandlerCreateTask,
}) => {
	return (
		<View style={[styles.inputContainer, { backgroundColor: backgroundColor }]}>
			<TextInput
				placeholder="New task"
				style={styles.inputText}
				autoCapitalize="none"
				autoCorrect={false}
				cursorColor="#000"
				selectionColor="#000"
				onFocus={onHandlerFocus}
				onBlur={onHandlerBlur}
				onChangeText={onHandlerChangeText}
				value={task}
			/>
			<Button
				disabled={task.length <= 0}
				title="Add"
				onPress={onHandlerCreateTask}
				color={"#000"}
			/>
		</View>
	);
};

export default TaskInput;