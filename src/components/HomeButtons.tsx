import { TouchableHighlight, View, Text } from 'react-native';
import { COLORS } from '../constants/index';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerProps } from '../types/mainTypes';
export const HomeButtons = ({ navigation }: DrawerProps) => {
  const goToTransfer = () => {
    navigation.navigate('Transfer');
  };

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
        onPress={() => {}}
        style={{
          display: 'flex',
          flex: 1,
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: COLORS.primaryColor,
        }}
        underlayColor={COLORS.grayColor3}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MatIcon name="qrcode-scan" size={24} color={COLORS.primaryColor} />
          <Text
            style={{
              color: COLORS.primaryColor,
              fontSize: 15,
              marginLeft: 8,
              fontWeight: '500',
            }}
          >
            Escanear QR
          </Text>
        </View>
      </TouchableHighlight>
      <View style={{ width: 28 }} />
      <TouchableHighlight
        onPress={goToTransfer}
        style={{
          display: 'flex',
          flex: 1,
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 8,
          backgroundColor: COLORS.accentColor,
        }}
        underlayColor={COLORS.accentMonoColor}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MatIcon
            name="bank-transfer-out"
            size={24}
            color={COLORS.textColor2}
          />
          <Text
            style={{
              color: COLORS.textColor1,
              fontSize: 15,
              marginLeft: 8,
              fontWeight: '500',
            }}
          >
            Transferir
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
