import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";
import {
  Delete01Icon,
} from "@hugeicons/core-free-icons";

import QuantitySelector from "@/components/cart/QuantitySelector";

type CartItemProps = {
  image: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export default function CartItem({
  image,
  name,
  category,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>

        <Text style={styles.category}>
          {category}
        </Text>

        <Text style={styles.price}>
          $ {price}
        </Text>

        <View style={styles.bottomRow}>
          <QuantitySelector
            quantity={quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />

          <TouchableOpacity
            style={styles.removeButton}
            onPress={onRemove}
            activeOpacity={0.8}
          >
            <HugeiconsIcon
              icon={Delete01Icon}
              size={20}
              color="#EF4444"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,

    flexDirection: "row",
    alignSelf: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 10,
    width: "95%"
  },

  image: {
    width: 95,
    height: 95,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
  },

  content: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "space-between",
  },

  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  category: {
    marginTop: 2,
    color: "#6B7280",
    fontSize: 14,
  },

  price: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "700",
    color: "#FF9900",
  },

  bottomRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  removeButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#FEE2E2",
    justifyContent: "center",
    alignItems: "center",
  },
});