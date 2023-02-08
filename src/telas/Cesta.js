import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import Texto from '../componentes/Texto';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
    <Image source={topo} style={estilos.topo} />
    <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

    <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha</Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
    </View>
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
    cesta: {
       paddingVertical: 8, // espaçamento vertical
       paddingHorizontal: 16,   // espaçamento horizontal   
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42, 
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row", // mudar ordenação das coisas da tela: row = linha
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})