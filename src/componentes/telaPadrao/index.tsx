import React from "react";
import { SafeAreaView, KeyboardAvoidingView, Platform,StatusBar } from "react-native";

import estilosGlobal from "../../estilos";

export default function TelaPadrao({children} : {children: JSX.Element|JSX.Element[]}): JSX.Element{
    return <SafeAreaView style={estilosGlobal.preencher}>
        <StatusBar />
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={estilosGlobal.preencher}>
        {children}
        </KeyboardAvoidingView>
    </SafeAreaView>

}

