import React from "react";
import { StyleSheet, View } from "react-native";
import Topo from './componentes/Topo';
import Detalhes from "./componentes/Detalhes";

export default function Cesta({ topo, detalhes }) {
    return <>
    <Topo {...topo} />
    <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
    </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
       paddingVertical: 8, // espaçamento vertical
       paddingHorizontal: 16,   // espaçamento horizontal   
    },
})