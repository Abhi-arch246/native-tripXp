import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Expenses are tracked here, collect your memories </Text>
    </View>
  );
}
