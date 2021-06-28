import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function News() {
    return (
        <View style={styles.container}>
        <Text style={styles.textcolor}>News Screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    
    container: {
        width:'100%',
        height:'100%',
        backgroundColor: '#10002B',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textcolor:{
          color:'white',
          fontWeight:'bold',
      },

})