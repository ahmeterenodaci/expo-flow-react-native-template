import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons, IoniconsTypes } from "@/components/Ionicons";

export function NotificationModal({ sheetRef }: { sheetRef: React.Ref<BottomSheetModal> }) {
  return (
    <BottomSheetModal
      enableHandlePanningGesture={false}
      handleComponent={null}
      ref={sheetRef}
      detached={true}
      bottomInset={30}
    >
      <BottomSheetView>
        <View className="rounded-3xl mx-4 mt-2 p-[1px]  border border-gray-300">
          <View className="rounded-3xl p-4">
            <View className="flex-row justify-between items-center mb-4">
              <View className="bg-primary px-3 py-1 rounded-full flex-row items-center space-x-2">
                <Ionicons name="notifications-outline" size={16} color="white" />
                <Text className="font-semibold text-white ml-1">Lorem</Text>
              </View>
              <Ionicons name="ellipsis-vertical" size={20} color="white" />
            </View>

            <View className="gap-4 flex-row">
              <NotificationCard icon="chatbubbles" title=" " subtitle=" " />

              <NotificationCard icon="mail" title=" " subtitle=" " />
            </View>
            <View className="gap-4 flex-row">
              <NotificationCard icon="chatbubbles" title=" " subtitle=" " />

              <NotificationCard icon="mail" title=" " subtitle=" " />
            </View>

            <TouchableOpacity className="bg-black rounded-full py-4 mt-2">
              <Text className="text-center font-semibold text-white"></Text>
            </TouchableOpacity>

            <View className="flex-row items-start mt-4 space-x-2">
              <Ionicons name="information-circle" size={16} color="#AAA" />
              <Text className="text-gray-500 ml-1 flex-1 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
}

function NotificationCard({ icon, title, subtitle }: { icon: IoniconsTypes; title: string; subtitle: string }) {
  return (
    <View className="bg-gray-100 rounded-2xl p-4 mb-4 flex-1">
      <View className="flex-row justify-between">
        <View className="flex-row items-center space-x-2">
          <Ionicons name={icon} size={18} color="#ccc" />
          <Text className="ml-1 text-black font-semibold">{title}</Text>
        </View>
      </View>

      <Text className="text-gray-700 mt-2 text-sm">{subtitle}</Text>
    </View>
  );
}
