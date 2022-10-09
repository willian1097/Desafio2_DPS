import React from 'react';
import {StyleSheet, Text, View} from 'react-native'
import Constants from 'expo-constants';
import colors from '../utils/colors';


export default function Result(props) {
   const {total, errorMessage, size, type, pay,cantidad} = props;
   if (size == 1) {
      tamaño = 'Short - 8 onz.';
      } else if (size == 1.5) {
      tamaño = 'Tall 12 onz' ;
     }else {
      tamaño = 'Grande 16 onz';
   }
   if (type == 2) {
      tipo = 'Mocha.';
      } else if (type == 2.5) {
      tipo = 'Te chai.' ;
     }else if (type == 1.5){
      tipo = 'Americano';
     }else{
      tipo = 'Frapper';
     }
   if (pay == 0.15) {
      forma = 'Efectivo (15%)';
     }else{
      forma = 'Tarjeta de Crédito (5%)';
     }   
return (
 <View style={styles.content}>
 {total && (<View style={styles.boxResult}>
 <Text style={styles.title}>RESUMEN DE PAGO</Text>
 <DataResult title="Tamaño solicitado:" value={`${tamaño}`} />
 <DataResult title="Tipo Cafe:" value={`${tipo}`} />
 <DataResult title="Cantidad:" value={`${cantidad}`} />
 <DataResult title="Tipo de pago:" value={`${forma}`} />
 <DataResult title="Descuento:" value={`-${total.totaldescuento}$`} />
 <DataResult
 title="Total a pagar:"
 value={`${total.totalfinal} $`}
 />
 </View>
 )}
 <View>
 <Text style={styles.error}>{errorMessage}</Text>
 </View>
 </View>
 );
}

function DataResult(props) {
 const {title, value} = props;
 return (
 <View style={styles.value}>
 <Text>{title}</Text>
 <Text>{value}</Text>
 </View>
 );
}


const styles = StyleSheet.create({
 content: {
 marginHorizontal: 40,
 },
 boxResult: {
 padding: 30,
 },
 title: {
 fontSize: 25,
 textAlign: 'center',
 fontWeight: 'bold',
 marginBottom: 10,
 },
 value: {
 flexDirection: 'row',
 justifyContent: 'space-between',
 marginBottom: 10,
 },
 error: {
 textAlign: 'center',
 color: '#f00',
 fontWeight: 'bold',
 fontSize: 20,
 },
});