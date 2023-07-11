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

// Obtiene la fecha actual en milisegundos
var dateMs = Date.now();

// Crea un objeto Date utilizando los milisegundos
var dateFormatted = new Date(dateMs);

// Formatea la fecha en DD/MM/AAAA
var date = dateFormatted.toLocaleDateString('es-ES', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
	hour: '2-digit',
  minute: '2-digit'
});

	const onHandlerCreateTask = () => {
		setTasks([
			...tasks, 
			{
				id: dateMs.toString(),
				date: date,
				value: task,
			}
		]);

		setTask("");
	};

	const onHandleModal = (item) => {
		setIsVisible(true);
		setSelectedTask(item);
	};

	const onHandlerDone = (id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));

		// En vez de borrarlo, hacer lógica para tacharlo
		setIsVisible(false);
	};

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

			<Modal visible={isVisible} animationType="fade">
				<View style={styles.modalView}>
					
					<View style={styles.modalContainer}>
						<View style={styles.modalTextsContainer}>
							<Text style={styles.modalDate}>{selectedTask?.date}</Text>
							<Text style={styles.modalText}>{selectedTask?.value}</Text>
						</View>

						<View style={styles.modalButtonsContainer}>
							<TouchableOpacity onPress={() => onHandlerDelete(selectedTask?.id)}>
								<Text style={styles.modalDeleteText}>Delete</Text>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => onHandlerDone(selectedTask?.id)}>
								<Text style={styles.modalDoneText}>Done</Text>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => setIsVisible(false)}>
								<Text style={styles.modalCloseText}>Close</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
}
