import { View, Text } from 'react-native';
import { COLORS } from '../../../constants/index';

export const JustTransferedScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.whiteColor1 }}>
      <Text>Se transfirió correctamente</Text>
    </View>
  );
};
