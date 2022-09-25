import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Button, Colors } from 'react-native-paper';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants/index';

export const CustomDrawer = ({
  navigation,
  state,
}: DrawerContentComponentProps) => {
  const jumpToRoute = (route: any) => {
    const jumpToAction = DrawerActions.jumpTo(route.name, {
      name: route.name,
    });
    navigation.dispatch(jumpToAction);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 40,
        backgroundColor: COLORS.whiteColor1,
      }}
    >
      <View style={{ flexDirection: 'column' }}>
        <View
          style={{
            backgroundColor: COLORS.grayColor3,
            paddingVertical: 24,
            paddingHorizontal: 16,
          }}
        >
          <Text style={{ color: COLORS.textColor3, fontSize: 18 }}>
            Bienvenido
          </Text>
        </View>
        {state.routes
          .filter(route => route.name !== 'Salir')
          .map(route => (
            <Button
              onPress={() => jumpToRoute(route)}
              style={{ marginVertical: 16 }}
              color={COLORS.primaryColor}
              icon={() => (
                <MatIcon
                  name="transfer"
                  size={24}
                  color={COLORS.primaryColor}
                />
              )}
              uppercase={false}
            >
              <Text style={{ color: COLORS.textColor1, fontSize: 15 }}>
                {route.name}
              </Text>
            </Button>
          ))}
      </View>
      <View>
        <View
          style={{
            height: 1,
            backgroundColor: COLORS.grayColor3,
            marginVertical: 16,
          }}
        />
        <Button
          onPress={() => jumpToRoute({ name: 'Salir' })}
          style={{ marginVertical: 8 }}
          color={COLORS.primaryColor}
          icon={() => (
            <MatIcon name="logout" size={24} color={COLORS.grayColor2} />
          )}
          uppercase={false}
        >
          <Text style={{ color: COLORS.textColor1, fontSize: 15 }}>Salir</Text>
        </Button>
      </View>
    </View>
  );
};
