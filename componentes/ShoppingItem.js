import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function App() {
    return (
        <View style={styles.container}>
            <Pressable>
                <AntDesign name="checkcircle" size={24} color="black" />
            </Pressable>

            <Text style={styles.title}>Bread</Text>

            <Pressable>
                <MaterialIcons name='delete' size={24} color="black" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "lightgray",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 35
    },
    title: {
        flex: 1,
        marginLeft: 10,
        fontSize: 17,
        fontWeight: "500"
    }
});
