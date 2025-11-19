import React from "react";
import { TextInput, View, Text } from "react-native";
import { Ionicons, IoniconsTypes } from "./Ionicons";
import { cn } from "@/utils/cn";

interface InputProps extends React.ComponentProps<typeof TextInput> {
  title: string;
  iconName: IoniconsTypes;
  error?: string;
  rightContent?: React.ReactNode;
}

function Input({ title, iconName, rightContent, className, error, ...rest }: InputProps) {
  return (
    <View className="mb-4">
      <Text className="text-lg font-bold text-gray-900 mb-3">{title}</Text>
      <View
        className={cn(
          "bg-white border-gray-400 rounded-2xl px-4 border py-3 flex-row items-center justify-center",
          className,
          error && "border-red-500"
        )}
      >
        <Ionicons name={iconName} size={24} color="#9CA3AF" className="mr-2" />
        <TextInput {...rest} placeholderTextColor="#9ca3af" className="flex-1 text-gray-900" />
        {rightContent}
      </View>
      {error && <Text className="pl-2 text-red-500 mt-2">{error}</Text>}
    </View>
  );
}

export default Input;
