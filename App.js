import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BotaoVermelho from './components/BotaoVermelho';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu App</Text>
      <BotaoVermelho/>
      <Text>Isso é um botão vermelho</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
