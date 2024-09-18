import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonComponentProps {
  title: string;
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e31837',
    padding: 15,
    borderRadius: 5,
    margin: 5,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default ButtonComponent;