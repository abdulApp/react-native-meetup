import Feather from '@expo/vector-icons/Feather';
import { Stack } from 'expo-router';
import { View, Text, Image } from 'react-native';

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <Text>This is a test</Text>
      <Text>Wed 13, Sep · 19:30 CET</Text>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>This is a Title</Text>
      <Text>This is a City Name</Text>

      {/* Events Image */}
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }}
        style={{ width: 200, height: 200 }}
      />

      {/* Footer */}
      <Text>16 going</Text>
      <Feather name="share" size={20} color="gray" />
      <Feather name="bookmark" size={24} color="gray" />
    </>
  );
}
