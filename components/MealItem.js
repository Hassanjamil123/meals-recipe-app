import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
    <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
                <ImageBackground
                source={{uri: props.image}}
                style={styles.bgImage}
                >
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                </ImageBackground>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetails}}>
                <Text style={styles.detailText}>{props.duration}m</Text>
                <Text style={styles.detailText}>{props.complexity.toUpperCase()}</Text>
                <Text style={styles.detailText}>{props.affordability.toUpperCase()}</Text>
            </View>
        </View>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10

    },  
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    detailText: {
        fontSize: 14,
        fontWeight: '600', 
    },
    title: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingHorizontal: 12,
        paddingVertical: 5,
        fontWeight: '600',
        textAlign: 'center'
    }
});

export default MealItem