import { View, Text, StyleSheet } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Profile } from "@hugeicons/core-free-icons";

type ProfileHeaderProps = {
  name: string;
  email: string;
};

export default function ProfileHeader({
  name,
  email,
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <HugeiconsIcon
          icon={Profile}
          size={42}
          color="#FFFFFF"
        />
      </View>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.email}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FF9900",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,

    shadowColor: "#FF9900",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  email: {
    marginTop: 6,
    fontSize: 15,
    color: "#6B7280",
  },
});