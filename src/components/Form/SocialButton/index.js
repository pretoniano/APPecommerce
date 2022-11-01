import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"


import Responsive from 'react-native-lightweight-responsive';
import { FontAwesome5 } from '@expo/vector-icons'; 

import theme from "../../../globals/theme/index"

export function SocialButton ({title,btnColor,name,...props}){
    return (
        <TouchableOpacity {...props} style={btnColor?{...styles.container,backgroundColor:btnColor}: styles.container}>
       
      {  name?<FontAwesome5 name={name} size={24} color="#ffffff" />:null}
        <Text style={styles.title}>
       {title}
      
        </Text>
        </TouchableOpacity>
    )
    }

    const styles = StyleSheet.create({
        container:{
            width: "48%",
            backgroundColor:theme.colors.primary,  
            padding: Responsive.font(8),
            borderRadius: Responsive.font(5),
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-evenly",
            marginVertical:Responsive.font(16)
            
            
        },
        title:{
            fontWeight:"bold",
            color: "#ffffff",
            fontSize:Responsive.font(16),
           
           
        }
    
    })