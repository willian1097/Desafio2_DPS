import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';

const ElementoLista = ({ datos, navegacion }) => (
    <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDD"
        onPress={() => navegacion.navigate('video', { datos: datos })}>
        <View style={styles.pelicula}>
            <Text style={styles.titulo}>{datos.titulo}</Text>
            <Image 
                source={datos.imagen}
                resizeMode="cover"
                style={styles.imagen}
            />
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    pelicula: {
        alignItems: 'center',
        padding: 12,
        borderWidth: 1,
        borderColor: '#084049',
        borderRadius: 4
    },
    titulo: {
        fontSize: 16,
        textAlign: 'center',
        color: '#0A515C',
        marginTop: 10,
        marginBottom: 10
    },
    imagen: {
        width: 160,
        height: 240,
        borderRadius: 4
    }
  });

export default ElementoLista;