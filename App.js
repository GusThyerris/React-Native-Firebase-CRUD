import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import ShoppingItem from "./componentes/ShoppingItem";
import { MaterialIcons } from "@expo/vector-icons";
import { Header } from 'react-native/Libraries/NewAppScreen';


export default function App() {
  return (
    <ScrollView>
      <View>

        <Text style={styles.heading}> Shopping List</Text>

        <Text style={styles.noOfItems}>3</Text>

        <Pressable>
          <MaterialIcons name='delete' size={30} color="black" />
        </Pressable>

      </View>
      <SafeAreaView style={styles.container}>

        <ShoppingItem />
        <ShoppingItem />
        <ShoppingItem />
        <TextInput
          placeholder='Enter shopping item'
          style={styles.input}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Header: {
    flexDirection: "row",
    backgroundColor: "red",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "500",
    flex: 1,
  },
  noOfItems: {
    fontSize: 30,
    fontWeight: "500",
    marginRight: 20,
  },
  input: {
    backgroundColor: "lightgray",
    padding: 10,
    fontSize: 17,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: "auto",
    
  }
});
