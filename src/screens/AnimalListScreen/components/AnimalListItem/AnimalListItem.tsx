import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Animal } from "../../../../types/animal";

interface AnimalListItemProps {
    animal: Animal,
    onSelectAnimal: (animal: Animal) => void
}

export default function AnimalListItem({ animal, onSelectAnimal }: AnimalListItemProps) {

    function onPress() {
        onSelectAnimal(animal)
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Image style={styles.image} source={{ uri: animal.image_link }} width={70} height={70} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{animal.name}</Text>
                        <Text style={styles.description}>{animal.animal_type}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 12,
        shadowOffset: {
            width: 1,
            height: 1
          },
          shadowOpacity: 0.5,
          shadowRadius: 1,
          shadowColor: "rgb(125, 125, 125)"
    },
    subContainer: {
        flexDirection: 'row',
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 4,
        width: '100%'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    textContainer: {
        flex: 1,
        marginLeft: 16
    },
    title: {
        fontSize: 18,
        color: "rgb(100, 100, 100)",
        fontWeight: "bold"
    },
    description: {
        fontSize: 14,
        color: "gray",
        fontStyle: "italic"
    },
  });