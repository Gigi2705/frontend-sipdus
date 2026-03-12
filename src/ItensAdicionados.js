import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";

const DATA = [
  { id: "1", nome: "Arroz", valor: "220g" },
  { id: "2", nome: "Feijão", valor: "100g" },
  { id: "3", nome: "Macarrão", valor: "---" },
  { id: "4", nome: "Batata Inglesa", valor: "20g" },
  { id: "5", nome: "Frango", valor: "15g" },
  { id: "6", nome: "Carne", valor: "15g" },
];

export default function ItensAdicionadosScreen({ navigation }) {

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemNome}>{item.nome}</Text>
      <View style={styles.linha}></View>
      <Text style={styles.itemValor}>{item.valor}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/voltar.png")}
            style={styles.voltaIcon}
          />
        </TouchableOpacity>
      </View>

      {/* LOGO MAIOR */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/sipdus_logo.jpg")}
          style={styles.logo}
        />
      </View>

      {/* CONTAINER AZUL */}
      <View style={styles.blueContainer}>

        <Text style={styles.titulo}>Itens Adicionados</Text>

        {/* LISTA */}
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.lista}
        />

        {/* BOTÃO CALCULAR */}
        <TouchableOpacity style={styles.botaoCalcular}>
          <Text style={styles.textoBotao}>✔ Calcular</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 5,
  },

  voltaIcon: {
    width: 100,
    height: 70,
    resizeMode: "contain",
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },

  logo: {
    width: 300,
    height: 140,
    resizeMode: "contain",
  },

  blueContainer: {
    flex: 1,
    backgroundColor: "#00BCD4",
    borderTopRightRadius: 60,
    padding: 20,
    paddingBottom: 60,
  },

  titulo: {
    fontSize: 18,
    marginBottom: 20,
    color: "#000",
    alignSelf: "center",
  },

  lista: {
    paddingBottom: 40,
  },

  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  itemNome: {
    fontSize: 16,
  },

  linha: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#999",
    marginHorizontal: 8,
  },

  itemValor: {
    fontSize: 16,
  },

  botaoCalcular: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 18,
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 40,
  },

  textoBotao: {
    fontSize: 18,
    fontWeight: "600",
    color: "#777",
  },

});
