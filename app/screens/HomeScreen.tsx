import React, { useEffect } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ProductType } from 'types/appTypes';
import { HomeStackParamList } from 'types/navigationTypes';

import WCCardProduct from 'components/WCCardProduct';
import WCListItemWrapper from 'components/WCListItemWrapper';
import WCLoader from 'components/WCLoader';

import useProductStore from 'store/productStore';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const { data, fetchData, isLoading } = useProductStore();

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <WCLoader />;
  }

  const onPressProduct = (item: ProductType) => {
    navigation.navigate('ProductScreen', { productData: item });
  };

  const renderItem = ({ item }: ListRenderItemInfo<ProductType>) => (
    <WCListItemWrapper>
      <WCCardProduct onPress={() => onPressProduct(item)} product={item} key={item.id} />
    </WCListItemWrapper>
  );

  return (
    <View className='pl-3 pr-3 bg-slate-200'>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        className='pt-3'
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

// needs to add padding to the bottom of the ScrollView
// nativewind does not support contentContainerStyle
const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 20,
  },
});

export default HomeScreen;
