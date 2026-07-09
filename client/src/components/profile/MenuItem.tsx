import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ArrowRight } from "@hugeicons/core-free-icons";

type MenuItemProps = {
  icon: any;
  title: string;
  color: string;
  onPress: () => void;
};

export default function MenuItem({
  icon,
  title,
  color,
  onPress,
}: MenuItemProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <HugeiconsIcon
            icon={icon}
            size={22}
            color={color}
          />
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>

      <HugeiconsIcon
        icon={ArrowRight}
        size={20}
        color="#9CA3AF"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: "95%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 22,
    marginBottom: 14,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFF4E5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
});