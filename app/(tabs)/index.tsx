import Feather from '@expo/vector-icons/Feather';
import { Stack } from 'expo-router';
import { View, Text, Image } from 'react-native';

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <Text>This is a test</Text>
      <Text>This is a Date</Text>
      <Text>This is a Title</Text>
      <Text>This is a City Name</Text>

      {/* Events Image */}
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }}
        style={{ width: '90%', height: 200 }}
      />

      {/* Footer */}
      <Text>16 going</Text>
      <Feather name="share" size={24} color="black" />
      <Feather name="bookmark" size={24} color="black" />
    </>
  );
}
