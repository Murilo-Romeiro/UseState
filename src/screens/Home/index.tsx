import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';


export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os dados</Text>

            <TextInput style={styles.input} placeholder="Nome" />

            <TextInput style={styles.input} placeholder="Data de Nascimento" />

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtbtn}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}
