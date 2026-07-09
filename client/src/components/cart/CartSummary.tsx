import { View, Text, StyleSheet } from "react-native";

type CartSummaryProps = {
  subtotal: number;
  shipping: number;
  total: number;
};

export default function CartSummary({
  subtotal,
  shipping,
  total,
}: CartSummaryProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Summary</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>$ {subtotal.toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Shipping</Text>
        <Text style={styles.value}>
          {shipping === 0 ? "Free" : `R ${shipping.toFixed(2)}`}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>$ {total.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginTop: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },

  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 18,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  label: {
    fontSize: 15,
    color: "#6B7280",
  },

  value: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 14,
  },

  totalLabel: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  totalValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FF9900",
  },
});