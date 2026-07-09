import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ShoppingBasket } from "@hugeicons/core-free-icons";

type EmptyWishlistProps = {
  onContinueShopping: () => void;
};

export default function EmptyWishlist({
  onContinueShopping,
}: EmptyWishlistProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <HugeiconsIcon
          icon={ShoppingBasket}
          size={64}
          color="#FF9900"
        />
      </View>

      <Text style={styles.title}>
        Your wishlist is empty
      </Text>

      <Text style={styles.description}>
        Looks like you haven't added any products yet.
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={onContinueShopping}
      >
        <Text style={styles.buttonText}>
          Continue Shopping
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 60,
  },

  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FFF4E5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 35,
  },

  button: {
    backgroundColor: "#FF9900",
    paddingHorizontal: 32,
    height: 54,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});