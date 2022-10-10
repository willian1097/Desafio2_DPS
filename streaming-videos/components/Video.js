import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const Video = ({ route, navigation }) => {

    return (
        <View style={styles.contenedor}>
            <YoutubePlayer height={200} play={true} videoId={route.params.datos.videoId} />
            <Text style={styles.informacion}>
                <Text style={styles.titulo}>Título: </Text> 
                {route.params.datos.titulo}
            </Text>
            <Text style={styles.informacion}>
                <Text style={styles.titulo}>Categoría: </Text> 
                {route.params.datos.categoria}
            </Text>
            <Text style={styles.informacion}> 
                <Text style={styles.titulo}>{route.params.datos.descripcion != undefined ? 'Descripción:' : 'N° Temporadas:'} </Text> 
                {route.params.datos.descripcion != undefined ? route.params.datos.descripcion : route.params.datos.temporadas}
            </Text>
            <Text style={styles.informacion}> 
            <Text style={styles.titulo}> {route.params.datos.fecha != undefined ? 'Fecha de lanzamiento:' : '' } </Text> 
                {route.params.datos.fecha != undefined ? route.params.datos.fecha : '' }
            </Text>
            <Button title="Regresar" color="#084049" onPress={() => navigation.goBack()} />
        </View>
    ); 
}
const styles = StyleSheet.create({
    contenedor: {
        padding: 10,
        marginBottom: 20
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
    },
});
  

export default Video;