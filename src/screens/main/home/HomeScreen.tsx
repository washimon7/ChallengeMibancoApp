import { Text, TouchableOpacity, View } from 'react-native';
import { DrawerProps } from '../../../types/mainTypes';
import { COLORS } from '../../../constants/index';
import { HomeButtons } from '../../../components/HomeButtons';
import { useGetTransfers } from '../../../hooks/transfers/useGetTransfers';
import { FlatList } from 'react-native-gesture-handler';
import { Transfer } from '../../../types/index';
import { getNameInitials } from '../../../utils';

export const HomeScreen = (props: DrawerProps) => {
  const { lastTransfers, isGettingLastTransfers } = useGetTransfers();

  const renderItem = ({ item: transfer }: { item: Transfer }) => (
    <TouchableOpacity activeOpacity={0.6}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 16,
          paddingVertical: 12,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 56,
            height: 56,
            borderRadius: 100,
            backgroundColor: COLORS.secondaryColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              textTransform: 'uppercase',
              fontSize: 18,
              fontWeight: '700',
              color: COLORS.whiteColor1,
              letterSpacing: 1,
            }}
          >
            {getNameInitials(transfer.cliente)}
          </Text>
        </View>
        <View style={{ marginLeft: 12 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: COLORS.textColor1,
            }}
          >
            {transfer.cliente}
          </Text>
          <Text style={{ fontSize: 14, color: COLORS.grayColor1 }}>
            {transfer.fechaoperacion}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18 }}>{`S/ ${transfer.monto}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.whiteColor1,
        position: 'relative',
        paddingBottom: 80,
        paddingTop: 16,
      }}
    >
      <FlatList
        data={lastTransfers}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <Text
            style={{
              paddingHorizontal: 16,
              fontWeight: '500',
              fontSize: 16,
              color: COLORS.textColor2,
            }}
          >
            Últimas transferencias
          </Text>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: COLORS.grayColor3 }} />
        )}
      />
      <HomeButtons {...props} />
    </View>
  );
};
