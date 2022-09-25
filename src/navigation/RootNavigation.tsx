import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens';
import { RootDrawerParamList } from '../types/mainTypes';
import { Text, View } from 'react-native';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const RootNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerItemStyle: {
          justifyContent: 'space-between',
        },
        drawerStyle: {
          backgroundColor: 'yellow',
        },
      }}
      drawerContent={() => (
        <View
          style={{
            flex: 1,
            backgroundColor: 'orange',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'column' }}>
            <Text>OpCIONES</Text>
          </View>
          <Text>OpCIONES</Text>
        </View>
      )}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="Exit"
        component={() => <Text>Saliste</Text>}
        options={{
          drawerItemStyle: {},
        }}
      />
    </Drawer.Navigator>
  );
};
