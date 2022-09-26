import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { COLORS } from '../../../constants/index';
import { DrawerProps } from '../../../types/mainTypes';

export const JustTransferedScreen = ({ navigation }: DrawerProps) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.whiteColor1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: '500',
          color: COLORS.textColor3,
          marginBottom: 24,
        }}
      >
        Se transfirió correctamente
      </Text>
      <Button
        onPress={() => navigation.jumpTo('Transferencia')}
        color={COLORS.primaryColor}
        mode="outlined"
      >
        Volver a inicio
      </Button>
    </View>
  );
};
