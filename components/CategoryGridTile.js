import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CategoryGridTile = props => {
  return (
    <TouchableOpacity 
    style={styles.gridItem} 
    onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor: props.color} }}> 
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        width: 200,
        maxWidth: '80%',
        height: 150
      },
      container: {
          flex: 1,
          shadowColor: 'black',
          shadowOpacity: 0.26,
          shadowOffset: {width: 0, height: 2},
          shadowRadius: 10,
          borderRadius: 10,
          elevation: 3,
          padding: 15,
          justifyContent: 'flex-end',
          alignItems: 'flex-end'
      },
      title: {
        //  fontFamily: '../assets/Fonts/TangoSans.ttf',
          fontSize: 19,
          textAlign: 'right'
      }
})

export default CategoryGridTile;