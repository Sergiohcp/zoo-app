import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { animals } from '../../mocks/animals';
import { Animal } from '../../types/animal';
import AnimalListItem from './components/AnimalListItem/AnimalListItem';

import styles from './styles';

export default function AnimalListScreen() {

  function onSelectAnimal(animal: Animal) {
    console.log(animal)
  }


  function renderItem({ item }: { item: Animal }) {
    return <AnimalListItem animal={item} onSelectAnimal={onSelectAnimal} />
  }
  
  return (
    <FlatList 
      data={animals}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.flatList}
      contentContainerStyle={styles.flatListContainer}
    />
  );
}
