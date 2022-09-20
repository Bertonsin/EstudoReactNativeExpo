import React from "react";
import { SafeAreaView, KeyboardAvoidingView, Platform,StatusBar } from "react-native";

import estilosGlobal, {cores} from "../../estilos";
import estilos from './estilos';

export default function TelaPadrao({children} : {children: JSX.Element|JSX.Element[]}): JSX.Element{
    return <>
    <SafeAreaView style={estilos.ajusteTela}>
        <StatusBar backgroundColor={cores.roxo}/>
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={estilosGlobal.preencher}>
        {children}
        </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={estilos.ajusteTelaBaixo} />
    </>
}

