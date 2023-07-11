import { View, Modal } from "react-native";
import { TaskInput, TaskItem, TaskModal, TaskList } from "./components";
import { styles } from "./styles.js";
import { useState } from "react";

export default function App() {
	// Lógica del color del input:
	const [backgroundColor, setBackgroundColor] = useState("#FFF");

	const onHandlerFocus = () => {
		setBackgroundColor("#DFDFDF");
	};

	const onHandlerBlur = () => {
		setBackgroundColor("#FFF");
	};

	// Lógica de tareas:
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);

	let dateMs = Date.now();
	let dateFormatted = new Date(dateMs);
	let date = dateFormatted.toLocaleDateString('es-ES', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});

	const onHandlerChangeText = (text) => {
		setTask(text);
	};

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

	// Lógica del modal:
	const [isVisible, setIsVisible] = useState(false);
	const [selectedTask, setSelectedTask] = useState(null);

	const onHandleModal = (item) => {
		setIsVisible(true);
		setSelectedTask(item);
	};

	const onHandlerDone = (id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
		setIsVisible(false);
	};

	const onHandlerDelete = (id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
		setIsVisible(false);
	};

	const renderItem = ({item}) => (
		<TaskItem
		item={item}
		onHandleModal={onHandleModal}
		/>
	);

	return (
		<View style={styles.app}>
			<View style={styles.body}>
				<TaskInput
				backgroundColor={backgroundColor}
				onHandlerFocus={onHandlerFocus}
				onHandlerBlur={onHandlerBlur}
				onHandlerChangeText={onHandlerChangeText}
				task={task}
				onHandlerCreateTask={onHandlerCreateTask}
				/>

				<TaskList
					tasks={tasks}
					renderItem={renderItem}
				/>
			</View>

			<Modal visible={isVisible} animationType="fade">
				<TaskModal
					selectedTask={selectedTask}
					onHandlerDelete={onHandlerDelete}
					onHandlerDone={onHandlerDone}
					setIsVisible={setIsVisible}
				/>
			</Modal>
		</View>
	);
}