import { View, Text, StyleSheet } from "react-native";
import React from "react";

export function Detail() {
    return (
        <View style={styles.container}>
            <Text>Página Detalhes da receita!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue"
    }
})