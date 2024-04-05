import React from 'react';
import { View } from 'react-native';

import WCCartModal from './app/components/WCCartModal';
import RootNavigation from './app/navigations/RootNavigation';

const App = () => {
  return (
    // SafeArea context is not properly working when hide the btab
    // <SafeAreaView className="bg-white flex-1">
    <View className='bg-white flex-1'>
      <RootNavigation />
      <WCCartModal />
    </View>
  );
};

export default App;
