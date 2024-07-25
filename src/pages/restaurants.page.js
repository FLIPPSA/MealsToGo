import React, { useState, useContext } from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar, FlatList } from 'react-native';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.components';
import { theme } from '../utils/design';
import { RestaurantsContext } from '../utils/restaurants.context';

export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchWrapper}>
                <Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery}/>
            </View>
            {isLoading ? <View style={styles.loadingIndicatorContainer}><ActivityIndicator animating={true} color={'blue'} size={'large'}/></View> :
            <FlatList data={restaurants} renderItem={({item}) => <RestaurantInfoCard restaurant={item}/>} 
              keyExtractor={item => item.name} 
              contentContainerStyle={{padding: theme.space[3]}}
            />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  loadingIndicatorContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  searchWrapper: {
    padding: theme.space[3],
  }
});