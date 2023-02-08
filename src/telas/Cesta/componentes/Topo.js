import React from "react";
import { Image, StyleSheet, Dimensions} from 'react-native';
import Texto from "../../../componentes/Texto";
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo() {
    return <>
    <Image source={topo} style={estilos.topo} />
    <Texto style={estilos.titulo}>Detalhe da cesta</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width, // altura / largura * tamanho da tela do usuario.
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16, // tamanho fonte
        lineHeight: 26, // tamanho da linha
        color: "white",
        fontWeight: "bold", // tipo de fonte
        padding: 60 // espaçamento
    },
})