import { View, Text, StyleSheet } from "react-native";
import React from "react";
import styles from "./style";

export function Logo() {
    return (
        <View style={styles.logoArea}>
            <Text style={styles.text}>Receita Fácil!</Text>
        </View>
    )
}