import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Logout } from "@hugeicons/core-free-icons";

type LogoutButtonProps = {
  onPress: () => void;
};

export default function LogoutButton({
  onPress,
}: LogoutButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <HugeiconsIcon
            icon={Logout}
            size={22}
            color="#EF4444"
          />
        </View>

        <Text style={styles.title}>Logout</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 18,
    marginTop: 18,

    flexDirection: "row",
    alignItems: "center",

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
    backgroundColor: "#FEE2E2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#EF4444",
  },
});