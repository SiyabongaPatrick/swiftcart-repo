import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type QuantitySelectorProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onDecrease}
        activeOpacity={0.8}
      >
        <Text style={styles.symbol}>−</Text>
      </TouchableOpacity>

      <Text style={styles.quantity}>{quantity}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onIncrease}
        activeOpacity={0.8}
      >
        <Text style={styles.symbol}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  button: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },

  symbol: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  quantity: {
    width: 40,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "600",
    color: "#111827",
  },
});