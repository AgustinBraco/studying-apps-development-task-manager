import { View, TextInput, Button, Text, FlatList, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles.js";
import { useState } from "react";

export default function App() {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const [isVisible, setIsVisible] = useState(false);
	const [selectedTask, setSelectedTask] = useState(null);
	const [backgroundColor, setBackgroundColor] = useState("#FFF");

	const onHandlerFocus = () => {
		setBackgroundColor("#DFDFDF");
	};

	const onHandlerBlur = () => {
		setBackgroundColor("#FFF");
	};

	const onHandlerChangeText = (text) => {
		setTask(text);
	};

	const onHandlerCreateTask = () => {
		setTasks([
			...tasks, 
			{
				id: Date.now().toString(),
				value: task
			}
		]);

		setTask("");
	};

	const onHandleModal = (item) => {
		setIsVisible(true);
		setSelectedTask(item);
	};

	// const onHandlerDone = (id) => {

	// };

	const onHandlerDelete = (id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
		setIsVisible(false);
	};

	const renderItem = ({item}) => (
		<TouchableOpacity style={styles.itemContainer} onPress={() => onHandleModal(item)}>
			<Text style={styles.itemText}>{item.value}</Text>
		</TouchableOpacity>
	);

	return (
		<View style={styles.app}>
			<View style={styles.body}>
				<View
					style={[styles.inputContainer, { backgroundColor: 	backgroundColor }]}
				>
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
					<Button disabled={task.length <= 0} title="Add" onPress=	{onHandlerCreateTask} color={"#000"} />
				</View>

				<FlatList 
					data={tasks}
					renderItem={renderItem}
					style={styles.itemsContainer}
					contentContainerStyle={styles.itemsFlatList}
					alwaysBounceVertical={false}
					keyExtractor={item => item.id}
				/>
			</View>

			<Modal visible={isVisible} animationType="slide">
				<View style={styles.modalContainer}>
					<View style={styles.modalTextsContainer}>
						<Text style={styles.modalTitle}>{selectedTask?.id}</Text>
						<Text style={styles.modalText}>{selectedTask?.value}</Text>
					</View>

					<View>
						<TouchableOpacity style={styles.modalDelete} onPress={() => onHandlerDelete(selectedTask?.id)}>
							<Text style={styles.modalDeleteText}>Delete</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.modalDone} onPress={() => onHandlerDelete(selectedTask?.id)}>
							<Text style={styles.modalDoneText}>Done</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.modalClose} onPress={() => setIsVisible(false)}>
							<Text style={styles.modalCloseText}>Close</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
}
