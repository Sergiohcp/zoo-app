import { useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { Animal } from "../../types/animal";

import styles from './styles'


export default function AnimalDetailsScreen() {

    const route = useRoute<any>()
    const animal = route.params?.animal as Animal;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: animal.image_link}} width={200} height={200} />
            <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={styles.textLeft}>{`Nome: `}</Text>
                <Text style={styles.textRight}>{animal.name}</Text>
            </View>
            <Text style={styles.text}>{`Nome: ${animal.name}`}</Text>
            <Text style={styles.text}>{`Nome latino: ${animal.latin_name}`}</Text>
            <Text style={styles.text}>{`Tipo: ${animal.animal_type}`}</Text>
            <Text style={styles.text}>{`Atividade: ${animal.active_time}`}</Text>
            <Text style={styles.text}>{`Expectativa de vida: ${animal.lifespan} anos`}</Text>
            <Text style={styles.text}>{`Habitat: ${animal.habitat}`}</Text>
            <Text style={styles.text}>{`Alimentação: ${animal.diet}`}</Text>
            <Text style={styles.text}>{`Ocorrência: ${animal.geo_range}`}</Text>
            <Text style={styles.text}>{`Nome do animal: ${animal.name}`}</Text>
        </View>
    )
}