import React from "react";
import { YStack, ScrollView, Text, Separator } from "tamagui";

const items = [
  { id: 1, title: "Item 1", description: "Description for Item 1" },
  { id: 2, title: "Item 2", description: "Description for Item 2" },
  { id: 3, title: "Item 3", description: "Description for Item 3" },
  { id: 4, title: "Item 4", description: "Description for Item 4" },
  { id: 5, title: "Item 5", description: "Description for Item 5" },
];

export default function ItemList() {
  return (
    <YStack f={1} backgroundColor="$background">
      <Text fontSize={24} fontWeight="bold" p="$4">
        Item List
      </Text>
      <ScrollView>
        <YStack separator={<Separator />}>
          {items.map((item) => (
            <YStack key={item.id} p="$4" backgroundColor="$backgroundSoft">
              <Text fontSize={20} fontWeight="bold">
                {item.title}
              </Text>
              <Text>{item.description}</Text>
            </YStack>
          ))}
        </YStack>
      </ScrollView>
    </YStack>
  );
}
