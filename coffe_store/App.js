/**
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card, Colors } from 'react-native-paper';

export default function App() {
  const [size, setSize] = useState(null);
  const [type, setType] = useState(null);
  const [pay, setPay] = useState(null);
  const [cantidad, setCant] = useState(null);
  const [total, setTotal] = useState(null);
 const [errorMessage, setErrorMessage] = useState('');

 useEffect(() => {
  if (size && type && pay && cantidad) calculate();
  else reset();
  }, [size, type, pay, cantidad]);

const calculate = () => {
 reset();
 if (!size) {
 setErrorMessage('Selecciona el tamaño de tu café!');
 } else if (!type) {
 setErrorMessage('Selecciona que tipo de café prefieres!');
 } else if (!pay) {
 setErrorMessage('Selecciona tu tipo de pago!');
 } else if (!cantidad) {
setErrorMessage('Ingresa una cantidad válida!');
}else {
 const descuento = ((size + type)*cantidad)*pay;
 const final = ((size+type)*cantidad)-descuento;
 setTotal({
 totaldescuento: descuento.toFixed(2).replace('.',','),
 totalfinal: final.toFixed(2).replace('.',','),
 });
 }
 };
 const reset = () => {
 setErrorMessage('');
 setTotal(null);
 };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>StarBosco APP</Text>

        <Form
          setSize={setSize}
          setType={setType}
          setPay={setPay}
          setCant={setCant}
        />
      </SafeAreaView>
      <Result
  size={size}
  type={type}
  pay={pay}
  cantidad={cantidad}
 total={total}
 errorMessage={errorMessage}
 />
      <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.SECONDARY_COLOR,
    height: 320,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.THIRD_COLOR,
    marginTop: 20,
  },
});
