import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
const target = Math.floor(Math.random() * 100) + 1;

export default function App() {
  const [guess, setGuess] = useState('');
  const [answer, setAnswer] = useState('Guess a number between 1-100'); 
  const [counter, setCounter] = useState(1);

  const buttonPressed = () => {
    if (guess < target) {
      setAnswer('Your guess ' + guess + ' is too low');
    } else if (guess > target) {
      setAnswer('Your guess ' + guess + ' is too high');
    } else {
      Alert.alert('You guessed the number in ' + counter + ' guesses');
    }
    setCounter(counter + 1);
  }

  return (
    <View style={styles.container}>
      <Text>{answer}</Text>
      <TextInput
        style={styles.input}
        onChangeText={guess => setGuess(guess)}
        value={guess}
        keyboardType='numeric'
      />
      <View style={styles.button}>
        <Button onPress={buttonPressed} title="MAKE GUESS" />
      </View>
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
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1, 
    padding: 5,
    margin: 10,
  },
});

