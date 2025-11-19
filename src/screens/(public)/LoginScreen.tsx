import Button from "@/components/Button";
import Input from "@/components/Input";
import { Ionicons } from "@/components/Ionicons";
import { useLocalization } from "@/providers/LocalizationProvider";
import { useSession } from "@/providers/SessionProvider";
import { ModalTemplate } from "@/templates/Modal";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SignInWith from "./_components/SignInWith";

export function LoginScreen() {
  const { signIn } = useSession();
  const { t } = useLocalization();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  function handleLogin() {
    setIsLoading(true);
    setError(undefined);

    signIn(email, password).then((response) => {
      if (response?.type === "error") {
        setError(response.message);
      }
      setIsLoading(false);
    });
  }

  return (
    <ModalTemplate title={t("Auth.Login.Title")} description={t("Auth.Login.Description")}>
      <Input
        placeholder={t("Auth.Login.Email")}
        title={t("Auth.Login.Email")}
        iconName="mail-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <Input
        placeholder={t("Auth.Login.Password")}
        title={t("Auth.Login.Password")}
        iconName="lock-closed-outline"
        secureTextEntry={!showPassword}
        error={error}
        onChangeText={setPassword}
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
      <Text className="text-right font-bold text-sm">{t("Auth.Login.Forgot Password")}</Text>

      <Button
        action={{
          onPress: handleLogin,
          label: t("Auth.Login.Login Button"),
        }}
        isLoading={false}
        disabled={isLoading}
        containerClassName="mt-8 bg-black disabled:opacity-50"
      />

      <SignInWith isLoading={isLoading} />
      <View className="border-gray-300 mx-4 flex-row gap-1 justify-center mb-6 mt-2">
        <Text className="font-light">{t("Auth.Login.No Account")}</Text>
        <Link href="/register" className="font-medium">
          {t("Auth.Login.Create Account")}
        </Link>
      </View>
    </ModalTemplate>
  );
}
