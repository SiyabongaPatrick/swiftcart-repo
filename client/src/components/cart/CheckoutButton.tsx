import { TouchableOpacity, Text, StyleSheet } from "react-native";

type CheckoutButtonProps = {
  onPress: () => void;
  disabled?: boolean;
};

export default function CheckoutButton({
  onPress,
  disabled = false,
}: CheckoutButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledButton,
      ]}
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.text,
          disabled && styles.disabledText,
        ]}
      >
        Proceed to Checkout
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#FF9900",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 30,

    shadowColor: "#FF9900",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },

  disabledButton: {
    backgroundColor: "#D1D5DB",
    shadowOpacity: 0,
    elevation: 0,
  },

  text: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  disabledText: {
    color: "#6B7280",
  },
});