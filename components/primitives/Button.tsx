import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  Image,
} from "react-native";
import { SvgUri } from "react-native-svg";

interface CustomButtonProps extends TouchableOpacityProps {
  title?: string;
  imageUrl?: string;
}

const Button: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  imageUrl,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      {...rest}
    >
      {imageUrl ? (
        <SvgUri width="28" height="28" uri={imageUrl} />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue", // Change the background color as needed
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white", // Change the text color as needed
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
  },
});

export default Button;
