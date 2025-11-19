import { cn } from "@/utils/cn";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons, IoniconsTypes } from "./Ionicons";

interface ButtonProps extends React.ComponentProps<typeof TouchableOpacity> {
  action: { onPress?: () => void | Promise<void>; label: string };
  isLoading?: boolean;
  containerClassName?: string;
  textClassName?: string;
  iconName?: IoniconsTypes;
  iconColor?: string;
}
function Button({
  action,
  isLoading,
  containerClassName: className,
  textClassName,
  iconName,
  iconColor = "white",
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      onPress={action.onPress}
      className={cn(
        "bg-primary py-4 rounded-full items-center shadow-lg flex-row justify-center",
        isLoading ? "opacity-50" : "",
        className
      )}
    >
      {iconName && <Ionicons name={iconName} size={24} color={iconColor} className="mr-2" />}
      <Text className={cn("text-white text-lg font-bold", textClassName)}>{action.label}</Text>
    </TouchableOpacity>
  );
}

export default Button;
