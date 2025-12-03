import ActionList, { ActionItemProps } from "@/components/ActionList";
import { useLocalization } from "@/providers/LocalizationProvider";
import { useSession } from "@/providers/SessionProvider";
import TabPage from "@/templates/TabPage";
import { router } from "expo-router";
import React, { useRef } from "react";
import { NotificationModal } from "./NotificationModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export default function ProfileScreen() {
  const { signOut } = useSession();
  const { t } = useLocalization();
  const sheetRef = useRef<BottomSheetModal>(null);
  const menuItems: ActionItemProps[] = [
    {
      title: t("Profile.Personal Info"),
      icon: "person-outline",
      disabled: true,
      onPress: () => {},
    },
    {
      title: t("Profile.App Language"),
      icon: "ticket-outline",
      onPress: () => router.push("/(modals)/language-selector"),
    },
    {
      title: t("Profile.Notification Preferences"),
      icon: "notifications-outline",
      onPress: () => {
        sheetRef.current?.present();
      },
    },

    {
      title: t("Profile.Logout"),
      icon: "log-out-outline",
      onPress: () => signOut(),
    },
  ];
  return (
    <TabPage title={t("Profile.Title")}>
      <ActionList title={t("Profile.Settings")} menuItems={menuItems} />
      <NotificationModal sheetRef={sheetRef} />
    </TabPage>
  );
}
