import { View, Text, StyleSheet } from "react-native";
import React from "react";

export function Favorites() {
    return (
        <View style={styles.container}>
            <Text>Página Favoritos!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow"
    }
})