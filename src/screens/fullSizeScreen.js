import React from 'react';
import {
    View,
    Image,
  } from 'react-native';
  import { StyleSheet } from 'react-native';


const FullSizeScreen = ({navigation, route}) => {
    const {item} = route.params;

    return (
    <View style={styles.container}>
        <Image  source={{ uri: item.full }} style={styles.container}/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

export default FullSizeScreen;