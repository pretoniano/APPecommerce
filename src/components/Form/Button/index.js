import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Responsive from 'react-native-lightweight-responsive';

import theme from "../../../globals/theme/index"

export function Button ({title,...props}){
    return (
        <TouchableOpacity {...props} style={styles.container}>
        <Text style={styles.title}>
       {title}

        </Text>
        
        </TouchableOpacity>
    )
    }

    const styles = StyleSheet.create({
        container:{
            width: "100%",
            backgroundColor:theme.colors.primary,
            padding: Responsive.font(8),
            borderRadius: Responsive.font(5), 
            alignItems:"center",
            marginVertical:Responsive.font(16)
        },
        title:{
            fontWeight:"bold",
            color: "#ffffff",
            fontSize:Responsive.font(16),
        }
    
    })