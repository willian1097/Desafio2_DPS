import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import series from '../../datos/series';
import ElementoLista from './ElementoLista';
import { SectionGrid } from 'react-native-super-grid';

const Series = ( { navigation }) => (
    <SectionGrid 
        maxItemsPerRow={1}
        sections={[
            {
                categoria: 'Comedia',
                data: series.slice(0, 3),
            },
            {
                categoria: 'Aventura',
                data: series.slice(3, 5),
            },
            {
                categoria: 'Fantasía',
                data: series.slice(5, 8),
            },
        ]}
        renderItem={({ item }) => (
            <ElementoLista datos={item} navegacion={navigation} />
        )}
        renderSectionHeader={({ section }) => (
            <Text style={styles.categoria}>{section.categoria}</Text>
        )}
    />
);

const styles = StyleSheet.create({
    categoria: {
        backgroundColor: '#084049',
        fontSize: 20,
        padding: 10,
        color: '#DAF6FB',
        borderRadius: 4,
    }
});
  

export default Series;