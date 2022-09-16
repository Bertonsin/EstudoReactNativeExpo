import React from "react";

import { Text,View } from "react-native";

export default function Item({nome, preco, descricao} :{nome?: string, preco?:number, descricao?:string}): JSX.Element{
    return <>
        <View>
            <Text >{nome}</Text>
            <Text >{preco}</Text>
            <Text >{descricao}</Text>
        </View>
    </>
}