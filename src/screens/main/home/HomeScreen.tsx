import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { DrawerProps } from '../../../types/mainTypes';

export const HomeScreen = ({ navigation }: DrawerProps) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ flex: 1 }}>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
