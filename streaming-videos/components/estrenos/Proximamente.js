import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const Proximamente = ({ datos }) => (
    <View style={styles.contenedor}>
        <YoutubePlayer height={200} play={false} videoId={datos.videoId} />
        <Text style={styles.informacion}>
            <Text style={styles.titulo}>Título: </Text> 
            {datos.titulo}
        </Text>
        <Text style={styles.informacion}>
            <Text style={styles.titulo}>Categoría: </Text> 
            {datos.categoria}
        </Text>
        <Text style={styles.informacion}> 
            <Text style={styles.titulo}>Descripción: </Text> 
            {datos.descripcion}
        </Text>
        <Text style={styles.informacion}> 
        <Text style={styles.titulo}>Fecha de estreno: </Text> 
            {datos.fecha}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    contenedor: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#108193',
    },
    titulo: {
        fontWeight: '700',
        color: '#084049',
    },
    informacion: {
        fontSize: 16,
        textAlign: 'justify',
        marginTop: 5,
        marginBottom: 5,
        color: '#084049',
    }
});
  

export default Proximamente;