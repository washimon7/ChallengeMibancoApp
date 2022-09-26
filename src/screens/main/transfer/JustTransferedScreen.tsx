import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { COLORS } from '../../../constants/index';
import { DrawerProps } from '../../../types/mainTypes';
import { useJustTransfered } from '../../../hooks/transfers/useJustTransfered';

export const JustTransferedScreen = (props: DrawerProps) => {
  const { transferResponse, goToTransferencia } = useJustTransfered(props);

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
        {`Operación ${transferResponse?.operacion}`}
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '500',
          color: COLORS.textColor3,
          marginBottom: 24,
        }}
      >
        {transferResponse?.mensaje}
      </Text>
      <Button
        onPress={goToTransferencia}
        color={COLORS.primaryColor}
        mode="outlined"
      >
        Volver a inicio
      </Button>
    </View>
  );
};
