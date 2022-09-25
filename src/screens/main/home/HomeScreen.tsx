import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { DrawerProps } from '../../../types/mainTypes';

export const HomeScreen = ({ navigation }: DrawerProps) => {
  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ flex: 1 }}>
          <Text>Home</Text>
          <Button title="Iniciar sesión" onPress={goToSignIn} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
