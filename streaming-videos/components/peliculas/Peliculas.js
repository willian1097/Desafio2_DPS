import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import datos from '../../datos/peliculas';
import Categoria from './Categoria';


const Peliculas = ({ navigation }) => (
    <View style={styles.contenedor}>
        <ScrollView>
            <Categoria titulo="Comedia" datos={datos.slice(0,6)} navegacion={navigation} />
            <Categoria titulo="Romance" datos={datos.slice(6,12)} navegacion={navigation} />
            <Categoria titulo="Acción" datos={datos.slice(12,20)} navegacion={navigation} />
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    contenedor: {
      height: 'auto',
      backgroundColor: '#f2f2f2',
    },
});

export default Peliculas;