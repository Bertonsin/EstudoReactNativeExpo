import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';

import { cores } from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() : JSX.Element{
    return <NavigationContainer>
        <Tab.Navigator
        screenOptions={
            {
                tabBarActiveTintColor: cores.roxo,
                tabBarInactiveTintColor: cores.claro,
                tabBarActiveBackgroundColor: cores.roxo,
                tabBarInactiveBackgroundColor: cores.laranja,
                tabBarStyle:{
                    height:70
                },
                tabBarLabelStyle: {
                    width:'100%',
                    flex:1,
                    fontWeight: 'bold',
                    fontSize:16,
                    lineHeight: 21,
                    marginTop:3,
                    paddingTop:21,
                    backgroundColor:cores.laranja
            },tabBarIconStyle:{
                display:'none'
            }, tabBarHideOnKeyboard:true
            
        }}>
            <Tab.Screen name="Serviços" component={Servicos} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
    </NavigationContainer>
}