import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Alert, ActivityIndicator } from 'react-native';
import { getAnimals } from '../../services/animals';
import { Animal } from '../../types/animal';
import AnimalListItem from './components/AnimalListItem/AnimalListItem';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function AnimalListScreen() {

  const navigation = useNavigation<any>();

  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function handleAnimals() {
    try {
      const response = await getAnimals(10);
      setAnimals(response.data)
    } catch (error) {
      Alert.alert("Ops!", "Parece que houve um problema ao carregar seus animais. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleAnimals()
  }, [])

  function onSelectAnimal(animal: Animal) {
    navigation.navigate("AnimalDetails", { animal })
  }

  function renderItem({ item }: { item: Animal }) { 
    return <AnimalListItem animal={item} onSelectAnimal={onSelectAnimal}  />
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center"}}>
        <ActivityIndicator animating color="green" size="large"/>
      </View>
    )
  }
  
  return (
    <FlatList 
      data={animals}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.flatList}
      contentContainerStyle={styles.flatListContainer}
      showsVerticalScrollIndicator={false}
    />
  );
}
