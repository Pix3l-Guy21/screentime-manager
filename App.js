import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [msg, setMsg] = useState('Live your Life');
  const [name, setName] = useState('');
  const [username, setUserName] = useState(name + Math.round(Math.random()*1000));
  const clickHandler = () => {
    setMsg('Loading...');
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ScTi-M</Text>
        <Text style={styles.massage}>{msg}</Text>
      </View>
      
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 30,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    width: 200,
    backgroundColor: '#45a992',
    padding: 20,
  },
  title: {
    color: '#aaa',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 20,
    margin: 10,
  },
  massage: {
    color: '#dad2dd',
    fontWeight: 'bold'
  },
  list: {
    padding: 30,
    marginTop: 25,
    backgroundColor: 'orange',
    fontSize: 24,
  },
  Form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20
  }, 
  input: {
    borderWidth: 2,
    borderColor: '#555',
    margin: 8,
    padding: 10,
    width: 250
  },
  buttonCon: {
    padding: 20,
    borderRadius: 30
  }
});
