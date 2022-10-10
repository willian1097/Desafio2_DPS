import React from 'react';
import { StyleSheet, Text} from 'react-native';
import ElementoLista from './ElementoLista';
import { FlatGrid } from 'react-native-super-grid';

const Categoria = ({ titulo, datos, navegacion }) => (
    <>
        <Text style={styles.titulo}>{ titulo }</Text>
        <FlatGrid
            style={styles.seccion}
            itemDimension={150}
            staticDimension={325}
            data={datos}
            horizontal
            renderItem={({ item }) => {
                return <ElementoLista datos={item} navegacion={navegacion} />
            }}
        />
    </>
);

const styles = StyleSheet.create({
    titulo: {
      backgroundColor: '#084049',
      fontSize: 20,
      padding: 10,
      color: '#DAF6FB',
      borderRadius: 4,
    },
    seccion: {
        backgroundColor: '#DAF6FB',
    }
  });
  

export default Categoria;