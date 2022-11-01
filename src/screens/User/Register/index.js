import React from "react";

import {View,Text, StyleSheet} from "react-native";
import Responsive from "react-native-lightweight-responsive";

import theme from "../../../globals/theme";

import { Entrada } from "../../../components/Form/Entrada";

const Register = (props)=>{
return (
    <View style={styles.container}>
    <Text style={styles.title}>Register Screen</Text>
    <View style={styles.form}>
        
    <Text style={styles.inputTitle}>Nome</Text>
    <Entrada></Entrada>
    <Text style={styles.inputTitle}>Rua</Text>
    <Entrada></Entrada>
    </View>
    
    <View style={styles.duplo}>
    
    <View>
    <Text style={styles.InputLeft}>Número</Text>
    <Entrada></Entrada>
    </View>

    <View>
    <Text style={styles.InputRight}>Bairro</Text>
    <Entrada></Entrada>
    </View>
    
    </View>
    <View style={styles.form}>
    <Text style={styles.inputTitle}>Email</Text>
    <Entrada></Entrada>
    <Text style={styles.inputTitle}>Senha</Text>
    <Entrada></Entrada>
    </View>
</View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Responsive.font(70),
        padding: Responsive.font(50)
    },
    title: {
        fontSize: Responsive.font(30),
        paddingBottom:Responsive.font(30)
    },
    form: {
        width:"100%",
        justifyContent:"center",
        paddingBottom:Responsive.font(24)
    },
    inputTitle:{
        fontSize:Responsive.font(14),
        color:theme.colors.primary,
        fontWeight:"bold",
        paddingLeft: "0%"
    },
    duplo: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    InputRight: {
        width:"100%",
        fontSize:Responsive.font(14),
        color:theme.colors.primary,
        fontWeight:"bold"
    },
    InputLeft: {
        width: "100%",
        fontSize:Responsive.font(14),
        color:theme.colors.primary,
        fontWeight:"bold"
    }


})
export {Register};