import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Card } from 'react-native-paper';
import { theme } from "../utils/design";
import star from "../../assets/icons/star";
import open from "../../assets/icons/open";
import { Image, SvgXml } from "react-native-svg";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const { 
        name = "Some Restaurant", 
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxbyQh2Id0WpFx5ygJITZsli5rHJxw_eFhw&s"], 
        vicinity = "24784 Wfeld Igelpfad 16", 
        isOpen = true, 
        rating = 4, 
        isClosedTemporarily = false 
    } = restaurant;
    const ratingArray = Array.from(new Array(Math.floor(rating)))

    return (
        <Card style={styles.cardContainer}>
            <Card.Cover key={name} style={styles.image} source={{ uri: photos[0] }} />
            <Text style={styles.title}>{name}</Text>
            <View style={styles.rateOpenContainer}>
                <View style={styles.starContainer}>
                    {ratingArray.map(() => <SvgXml xml={star} width={20} height={20}/>)}
                </View>
                <View style={styles.infoContainer}>
                    {isClosedTemporarily && <Text variant='label' style={styles.closed}>CLOSED TEMPORARILY</Text>}
                    {isOpen && <SvgXml xml={open} width={20} height={20}/>}
                    <Image style={styles.iconContainer} source={{ uri: icon }}/>
                </View>
            </View>
            <Text style={styles.address}>{vicinity}</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'end'
    },
    iconContainer: {
        height: 25,
        width: 25
    },  
    closed: {
        color: 'red'
    },  
    cardContainer: {
        padding: theme.space[3],
        backgroundColor: 'white',
        marginBottom: theme.space[3]
    },
    starContainer: {
        flexDirection: 'row'
    },
    rateOpenContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: theme.space[2]
    },
    image: {
        paddingBottom: theme.space[4],
        backgroundColor: 'white'
    },
    title: {
        fontSize: theme.fontSizes.body,
    },
    address: {
        fontSize: theme.fontSizes.body,
    }
})