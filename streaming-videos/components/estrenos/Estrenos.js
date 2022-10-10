import * as React from 'react';
import {Text, StyleSheet, Button} from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import estrenos from '../../datos/estrenos';
import Proximamente from './Proximamente';
 
const Estrenos = () => (
    <SectionGrid 
        maxItemsPerRow={1}
        sections={[
            {
                categoria: 'Peículas',
                data: estrenos.slice(0, 3),
            },
            {
                categoria: 'Series',
                data: estrenos.slice(3, 6),
            },
        ]}
        renderItem={({ item }) => (
            <Proximamente datos={item} />
        )}
        renderSectionHeader={({ section }) => (
            <Text style={styles.titulo}>{section.categoria}</Text>
        )}
    />
);

const styles = StyleSheet.create({
    titulo: {
        backgroundColor: '#084049',
        fontSize: 20,
        padding: 10,
        color: '#DAF6FB',
        borderRadius: 4,
    },
});

export default Estrenos;