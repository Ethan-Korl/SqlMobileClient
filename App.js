import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackLayout from './core/StackLayout';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <StackLayout />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
