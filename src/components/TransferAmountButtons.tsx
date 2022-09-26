import { TouchableHighlight, View, Text } from 'react-native';
import { COLORS } from '../constants/index';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type TransferAmountButtonsProps = {
  doTransferAmount: () => void;
  cancelTransfer: () => void;
  canTransfer: boolean;
};

export const TransferAmountButtons = ({
  canTransfer,
  cancelTransfer,
  doTransferAmount,
}: TransferAmountButtonsProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 24,
        position: 'absolute',
        bottom: 16,
        left: 0,
        right: 0,
      }}
    >
      <TouchableHighlight
        onPress={cancelTransfer}
        style={{
          display: 'flex',
          flex: 1,
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 8,
        }}
        underlayColor={COLORS.grayColor3}
      >
        <Text
          style={{
            color: COLORS.textColor3,
            fontSize: 15,
            marginLeft: 8,
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          Cancelar
        </Text>
      </TouchableHighlight>
      <View style={{ width: 28 }} />
      <TouchableHighlight
        onPress={canTransfer ? () => doTransferAmount() : () => {}}
        style={{
          display: 'flex',
          flex: 1,
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 8,
          backgroundColor: COLORS.accentColor,
        }}
        underlayColor={COLORS.accentMonoColor}
      >
        <Text
          style={{
            color: COLORS.textColor1,
            fontSize: 15,
            marginLeft: 8,
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          Transferir
        </Text>
      </TouchableHighlight>
    </View>
  );
};
