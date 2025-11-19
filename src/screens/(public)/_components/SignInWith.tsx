import Button from "@/components/Button";
import { useLocalization } from "@/providers/LocalizationProvider";
import React from "react";
import { View, Text } from "react-native";

interface SignInWithProps {
  isLoading?: boolean;
}
function SignInWith({ isLoading }: SignInWithProps) {
  const { t } = useLocalization();
  return (
    <>
      <View className="flex-row gap-3 items-center justify-center my-8">
        <View className="flex-1 border-t border-gray-300" />
        <Text className="font-light">{t("Auth.Login.Or")}</Text>
        <View className="flex-1 border-t border-gray-300" />
      </View>
      <View className="flex-row gap-3 mb-8">
        <Button
          iconName="logo-google"
          iconColor="#000"
          disabled={true}
          action={{ label: t("Auth.Login.Login with Google") }}
          isLoading={isLoading}
          containerClassName="bg-white flex-1 disabled:opacity-50"
          textClassName="text-black font-light text-sm"
        />
        <Button
          iconName="logo-apple"
          iconColor="#000"
          disabled={true}
          action={{ label: t("Auth.Login.Login with Apple") }}
          isLoading={isLoading}
          containerClassName="bg-white flex-1 disabled:opacity-50"
          textClassName="text-black font-light text-sm"
        />
      </View>
    </>
  );
}

export default SignInWith;
