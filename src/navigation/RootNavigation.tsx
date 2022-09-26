import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, SignOutScreen, TransferScreen } from '../screens';
import { RootDrawerParamList } from '../types/mainTypes';
import { CustomDrawer } from '../components/CustomDrawer';
import { COLORS } from '../constants/index';
import { Colors } from 'react-native-paper';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const RootNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Transferencia"
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Transferencia"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.primaryColor,
          },
          headerTintColor: Colors.white,
          headerTitle: `Buen día, ${'Miguel'}`,
          headerTitleStyle: { fontSize: 16 },
        }}
      />
      <Drawer.Screen
        name="Transfer"
        component={TransferScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.whiteColor1,
          },
          headerTintColor: COLORS.textColor1,
          headerTitle: 'Transferir',
          headerTitleStyle: { fontSize: 16 },
        }}
      />
      <Drawer.Screen
        name="Salir"
        component={SignOutScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};