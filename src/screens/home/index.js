import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./style";
//import { Icon } from "../../components/icon";

import { Logo } from "../../components/logo";

export function Home() {

    const [inputValue, setInputValue] = useState("")

    function handleSearch() {
        console.log(`Search: ${inputValue}`)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Logo/>

            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>que combina com você</Text>

            {/* <Icon name="home" mode="dark" pressed={true}/>*/}

            <View style={styles.form}>
                <TextInput
                    placeholder="Pesquise aqui..."
                    style={styles.input}
                    onChangeText={(text) => setInputValue(text)}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Image source={require("../../imgs/icons/dark/explore_noPrass.png")} style={{height: 25, width: 25}} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}