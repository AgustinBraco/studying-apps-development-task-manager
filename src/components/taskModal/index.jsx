import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles.js";

const TaskModal = ({
	selectedTask,
	onHandlerDelete,
	onHandlerDone,
	setIsVisible,
}) => {
	return (
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
	);
};

export default TaskModal;
