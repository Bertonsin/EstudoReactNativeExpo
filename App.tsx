import React from "react";

import Servicos from './src/telas/Servicos/Item';
import { SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Servicos />
    </SafeAreaView>
  );
}
