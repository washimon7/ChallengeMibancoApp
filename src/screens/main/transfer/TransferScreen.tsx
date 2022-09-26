import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TransferAmountButtons } from '../../../components/TransferAmountButtons';
import { COLORS } from '../../../constants/index';
import { useTransferAmount } from '../../../hooks/transfers/useTransferAmount';
import { DrawerProps } from '../../../types/mainTypes';

export const TransferScreen = (props: DrawerProps) => {
  const {
    transfer,
    canTransfer,
    handleChange,
    doTransferAmount,
    cancelTransfer,
  } = useTransferAmount(props);
  const { amount, cellphoneNumber } = transfer;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.whiteColor1,
        paddingHorizontal: 16,
        paddingTop: 16,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          marginBottom: 12,
          color: COLORS.grayColor1,
        }}
      >
        Ingresa tu número de celular y monto
      </Text>
      <TextInput
        onChangeText={text => handleChange(text, 'cellphoneNumber')}
        value={cellphoneNumber}
        style={{ marginBottom: 12 }}
        label="Número celular"
        keyboardType="number-pad"
      />
      <TextInput
        onChangeText={text => handleChange(text, 'amount')}
        value={amount}
        style={{ marginBottom: 12 }}
        label="Monto"
        keyboardType="number-pad"
      />
      <TransferAmountButtons
        cancelTransfer={cancelTransfer}
        doTransferAmount={doTransferAmount}
        canTransfer={canTransfer}
      />
    </View>
  );
};
