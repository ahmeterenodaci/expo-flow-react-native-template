import Button from "@/components/Button";
import Input from "@/components/Input";
import { Ionicons } from "@/components/Ionicons";
import { useLocalization } from "@/providers/LocalizationProvider";
import { ModalTemplate } from "@/templates/Modal";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SignInWith from "./_components/SignInWith";

export function RegisterScreen() {
  const { t } = useLocalization();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ModalTemplate title={t("Auth.Register.Title")} description={t("Auth.Register.Description")}>
      <Input
        placeholder={t("Auth.Register.Full Name")}
        title={t("Auth.Register.Full Name")}
        iconName="person-outline"
        autoCapitalize="words"
      />
      <Input
        placeholder={t("Auth.Register.Email")}
        title={t("Auth.Register.Email")}
        iconName="mail-outline"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder={t("Auth.Register.Password")}
        title={t("Auth.Register.Password")}
        iconName="lock-closed-outline"
        secureTextEntry={!showPassword}
        className="mt-4"
        rightContent={
          <TouchableOpacity onPressIn={() => setShowPassword(true)} onPressOut={() => setShowPassword(false)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="#9CA3AF"
              className="mr-2"
            />
          </TouchableOpacity>
        }
      />

      <Button
        action={{
          label: t("Auth.Register.Register Button"),
        }}
        isLoading={false}
        disabled={true}
        containerClassName="mt-8 bg-black disabled:opacity-50"
      />

      <SignInWith isLoading={true} />
      <View className="border-gray-300 mx-4 flex-row gap-1 justify-center mb-6 mt-2">
        <Text className="font-light">{t("Auth.Register.Have Account")}</Text>
        <Link href="/login" className="font-medium">
          {t("Auth.Register.Login")}
        </Link>
      </View>
    </ModalTemplate>
  );
}
