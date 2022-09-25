import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Props } from '../../../types/mainTypes';

export const HomeScreen = ({ navigation }: Props) => {
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
