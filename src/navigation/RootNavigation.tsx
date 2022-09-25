import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, SignInScreen } from '../screens';
import { RootDrawerParamList } from '../types/mainTypes';
import { Text } from 'react-native';
import { CustomDrawer } from '../components/CustomDrawer';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const RootNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Transferencia"
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Transferencia" component={HomeScreen} />
      <Drawer.Screen name="Salir" component={SignInScreen} />
    </Drawer.Navigator>
  );
};
