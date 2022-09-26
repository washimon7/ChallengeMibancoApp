import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SignInScreen } from '../screens';
import { RootStackParamList } from '../types/mainTypes';
import { RootNavigation } from './RootNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={RootNavigation}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
