import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, Coder!</Text>
      <Text style={styles.text}>Agustin Braco</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A5C9CA',
  },
  title: {
    fontSize: 35,
  },
  text: {
    fontSize: 20,
  },
});
