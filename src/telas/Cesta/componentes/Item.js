import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Image } from 'react-native';
import Texto from "../../../componentes/Texto";

export default function Item({ item: { nome, imagem }}){
    return <View key={nome} style={estilos.item}>
        <Image source={ imagem } style={estilos.imagem}/>
        <Texto style={estilos.nome}>{ nome }</Texto>
    </View>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1, 
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    imagem: {
        width: 85,
        height: 85
    },
    nome: {
        fontSize: 19,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})