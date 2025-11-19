import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface TabPageProps {
  title: string;
  children?: React.ReactNode;
}
function TabPage({ title, children }: TabPageProps) {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 p-4">
        <Text className="font-bold text-3xl mb-6">{title}</Text>
        {children}
      </View>
    </SafeAreaView>
  );
}

export default TabPage;
