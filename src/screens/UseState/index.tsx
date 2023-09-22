import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useState } from 'react';


export default function Home() {

    const [name, setName] = useState('')
    const [dataNasc, setdataNasc] = useState('')

    function handleUserAdd() {
        console.log("Nome: " + name + "\nData de Nascimento: " + dataNasc)

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os dados</Text>

            <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />

            <Text style={styles.text}> {name} </Text>

            <TextInput style={styles.input} placeholder="Data de Nascimento" value={dataNasc} onChangeText={setdataNasc} />

            <Text style={styles.text}> {dataNasc} </Text>


            <TouchableOpacity style={styles.btn} onPress={handleUserAdd}>
                <Text style={styles.txtbtn}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}
