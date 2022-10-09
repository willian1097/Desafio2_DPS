import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { RefreshControlBase } from 'react-native';
import Constants from 'expo-constants';
import colors from '../utils/colors';

export default function Footer(props) {
  const {calculate} = props;

  return (
 <View style={styles.viewFooter}>
 <TouchableOpacity style={styles.button} onPress={calculate}>
 <Text style={styles.text}>COMPRAR!</Text>
 </TouchableOpacity>
 </View>
 );
}

const styles = StyleSheet.create({
viewFooter: {
 position: 'relative',
 bottom: 0,
 width: '75%',
 backgroundColor: colors.SECONDARY_COLOR,
 height: 70,
 borderTopLeftRadius: 30,
 borderTopRightRadius: 30,
 borderBottomLeftRadius: 30,
 borderBottomRightRadius: 30,
 marginBottom: 40,
 marginLeft: 50,
 alignItems: 'center',
 justifyContent: 'center',
 },
  button: {
 backgroundColor: colors.PRIMARY_COLOR_DARK,
 padding: 16,
 borderRadius: 20,
 width: '75%',
 },
 text: {
 fontWeight: 'bold',
 fontSize: 18,
 color: colors.THIRD_COLOR,
 textAlign: 'center',
 },
});
