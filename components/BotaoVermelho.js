import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function BotaoVermelho(){
    return(
        <TouchableOpacity
            style={css.botao}
            onPress={()=>{alert("Botão Vermelho Pressionado")}}
        >
            <Text style={css.botaoText}>Botão Vermelho</Text>
        </TouchableOpacity>
            
        
    )
}

export default BotaoVermelho;

const css = StyleSheet.create({
    "botao":{
        backgroundColor: "red",
        color: "red",
        fontSize: 16,
        borderRadius: 10
    },
    "botaoText":{
        color: "white",
        fontSize: 16,
        padding: 10
    }
})