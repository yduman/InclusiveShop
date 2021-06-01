import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { VStack, HStack } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function ShippingNotice() {
  return (
    <View style={styles.view}>
      <HStack space={4}>
        <Icon name="package-variant-closed" size={30} />
        <VStack space={1}>
          <Text maxFontSizeMultiplier={1.8}>Shipped by InclusiveShop</Text>
          <Text maxFontSizeMultiplier={1.8} style={styles.date}>
            {getShippingDate()}
          </Text>
        </VStack>
      </HStack>
    </View>
  );
}

function getShippingDate() {
  const now = dayjs();
  const from = now.add(7, "day");
  const to = from.add(7, "day");
  return formatDate(from) + " - " + formatDate(to);
}

function formatDate(date: dayjs.Dayjs) {
  return date.format("ddd, DD/MM");
}

const styles = StyleSheet.create({
  view: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  date: {
    fontWeight: "bold",
  },
});
