import React from "react";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Servicos from './src/telas/Servicos';
import { SafeAreaView, StatusBar } from "react-native";


export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Servicos />
    </SafeAreaView>
  );
}
