import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Home</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
