import * as React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Form(props) {
  const { setSize, setType, setPay, setCant } = props;

  return (
    <View style={styles.viewForm}>
      <RNPickerSelect
        style={picketSelectStyles}
        onValueChange={(value) => setSize(value)}
        placeholder={{
          label: 'Seleccióna el tamaño...',
          value: null,
        }}
        items={[
          { label: 'Short 8 onz. - $1.00', value: 1 },
          { label: 'Tall 12 onz. - $1.50', value: 1.5 },
          { label: 'Grande 16 onz. - $2.00', value: 2 }
        ]}
      />
      <RNPickerSelect
        style={picketSelectStyles}
        onValueChange={(value) => setType(value)}
        placeholder={{
          label: 'Seleccióna el tipo de cafe...',
          value: null,
        }}
        items={[
          { label: 'Mocha - $2.00', value: 2 },
          { label: 'Te chai - $2.50', value: 2.5 },
          { label: 'Americano - $1.50', value: 1.5 },
          { label: 'Frapper - $3.00', value: 3 }
        ]}
      />
      <View>
        <RNPickerSelect
        style={picketSelectStyles}
        onValueChange={(value) => setPay(value)}
        placeholder={{
          label: 'Pago...',
          value: null,
        }}
        items={[
          { label: 'Efectivo - 15%', value: 0.15 },
          { label: 'Tarjeta de credito - 5%', value: 0.05 }
        ]}
      />
      </View>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={(e) => setCant(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 35,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 185,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '50%',

    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '100%',
  },
});

const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginBottom: 10,
    width: '100%',   
  },
  tipo2: {
    width: 80,
  },
});
