import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';

const ElementoLista = ({ datos, navegacion }) => (
    <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDD"
        onPress={() => navegacion.navigate('video', { datos: datos })}>
        <View style={styles.container}>
            <Image source={datos.imagen} style={styles.imagen} />
            <View style={styles.descripcion}>
                <Text style={styles.informacion}>
                    <Text style={styles.titulo}>Título: </Text> 
                    {datos.titulo}
                </Text>
                <Text style={styles.informacion}>
                    <Text style={styles.titulo}>N° Temporadas: </Text> 
                    {datos.temporadas}
                </Text>
            </View>
        </View>
    </TouchableHighlight>
);


const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 2,
      backgroundColor: '#DAF6FB',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#108193',
      padding: 20
    },
    imagen: {
        width: 130,
        height: 170,
        borderRadius: 4,
        marginRight: 20,
    },
    descripcion: {
        flex: 1,
        padding: 5,
    },
    titulo: {
        fontWeight: '700',
        color: '#084049',
    },
    informacion: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
        color: '#084049',
    }
});
  

export default ElementoLista;