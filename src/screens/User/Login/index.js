import React from "react";

import {View, Text, StyleSheet} from "react-native"
import theme from "../../../globals/theme/index";
import Responsive from "react-native-lightweight-responsive";
import { Entrada } from "../../../components/Form/Entrada";

const Login = ()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>
            <View style={styles.form}>
                <Text style={styles.inputTitle}>Email</Text>
                <Entrada />
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:Responsive.font(26),
        color:theme.colors.title,
        fontWeight:"bold"
    },
    inputTitle:{
        fontSize:Responsive.font(26),
        color:theme.colors.primary,
        fontWeight:"bold"
    },
    form: {
        width:"100%",
        justifyContent:"center",
        paddingBottom:Responsive.font(24)
    }
})


export {Login}