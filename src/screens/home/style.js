import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141414",
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    },
    title: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "bold"
    },
    form: {
        backgroundColor: "#3d3d3d",
        width: "100%",
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#828282",
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    input: {
        width: "100%",
        height: 54,
        color: "#fff",
        maxWidth: "90%"
    }
})

export default styles