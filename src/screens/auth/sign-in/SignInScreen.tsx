import { Text, SafeAreaView, ScrollView } from 'react-native';
import { useAppSelector } from '../../../app/hooks';

export const SignInScreen = () => {
  const { loggedInUser } = useAppSelector(state => state.auth);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Inicia Sesión</Text>
        {loggedInUser && <Text>{loggedInUser.clientName}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};
