import { availableLocales } from "@/localization/config";
import { useLocalization } from "@/providers/LocalizationProvider";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Dimensions, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function Onboarding() {
  const { t, activeLocale } = useLocalization();

  const slides = [
    {
      id: "1",
      title: t("Onboarding.Welcome"),
      text: t("Onboarding.Welcome Description"),
    },
    {
      id: "2",
      title: t("Onboarding.Fast & Modern"),
      text: t("Onboarding.Fast & Modern Description"),
    },
    {
      id: "3",
      title: t("Onboarding.Let's Start"),
      text: t("Onboarding.Let's Start Description"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      return;
    }
    router.push("/login");
  };

  const handleSkip = () => {
    flatListRef.current?.scrollToIndex({ index: slides.length - 1 });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <TouchableOpacity
        onPress={() => router.push("/(modals)/language-selector")}
        className="absolute top-20 right-4 border border-gray-400 rounded-full z-20"
      >
        <Image source={availableLocales[activeLocale].flag} style={{ width: 40, height: 40 }} contentFit="cover" />
      </TouchableOpacity>
      <FlatList
        data={slides}
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={{ width }} className="items-center justify-center px-6">
            <Text className="text-4xl font-bold text-primary mb-4">{item.title}</Text>
            <Text className="text-lg text-gray-600 text-center">{item.text}</Text>
          </View>
        )}
      />

      <View className="flex-row justify-center mb-8">
        {slides.map((_, i) => (
          <View
            key={i}
            className={`h-2 w-2 mx-1 rounded-full ${currentIndex === i ? "bg-primary w-4" : "bg-gray-300"}`}
          />
        ))}
      </View>

      <View className="flex-row justify-between px-6">
        <TouchableOpacity onPress={handleSkip}>
          <Text className="text-gray-500 text-lg">{t("Onboarding.Skip")}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext}>
          <Text className="text-primary text-lg font-semibold">
            {currentIndex === slides.length - 1 ? t("Onboarding.Start") : t("Onboarding.Next")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
