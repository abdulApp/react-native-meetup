import Feather from '@expo/vector-icons/Feather';
import { Stack } from 'expo-router';
import { View, Text, Image } from 'react-native';

import EventListItem from '~/components/EventListItem';
import events from '~/assets/events.json';
const event = events[0];

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />

      <EventListItem event={event} />

      <View className="gap-3 p-3">
        <View className="flex-row">
          <View className="flex-1 gap-2">
            <Text className="text-lg font-semibold uppercase text-amber-800">
              Wed 13, Sep · 19:30 CET
            </Text>
            <Text className="text-xl font-bold">{event.title}</Text>
            <Text className="text-gray-700">{event.location}</Text>
          </View>

          {/* Events Image */}
          <Image
            source={{ uri: event.image }}
            className="aspect-video w-2/5 rounded-xl"
          />
        </View>

        {/* Footer */}
        <View className="flex-row gap-3">

        <Text className="mr-auto text-gray-700">16 going</Text>
        <Feather name="share" size={20} color="gray" />
        <Feather name="bookmark" size={24} color="gray" />
        </View>
      </View>
    </>
  );
}
