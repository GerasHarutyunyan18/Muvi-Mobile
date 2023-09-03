import React from "react";
import { TextInput, View, StyleSheet, TextInputProps } from "react-native";
import { CssColors } from "../../constants/Colors";

interface CustomInputProps extends TextInputProps {
  label: string;
}

const Input: React.FC<CustomInputProps> = ({ label, style, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, style]}
        placeholder={label}
        placeholderTextColor="#999"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: CssColors.grey,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: CssColors.white,
  },
});

export default Input;
