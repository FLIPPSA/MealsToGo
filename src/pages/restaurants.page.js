import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.components';
import { theme } from '../utils/design';

export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchWrapper}>
                <Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery}/>
            </View>
            <FlatList data={[{name: 1}, {name: 2}, {name: 3}]} renderItem={() => <RestaurantInfoCard />} keyExtractor={item => item.name} contentContainerStyle={{padding: theme.space[3]}}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  searchWrapper: {
    padding: theme.space[3],
  }
});