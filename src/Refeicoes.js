import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  { id: "1", nome: "Arroz" },
  { id: "2", nome: "Feijão" },
  { id: "3", nome: "Macarrão" },
  { id: "4", nome: "Batata inglesa" },
  { id: "5", nome: "Frango" },
  { id: "6", nome: "Carne" },
];

export default function RefeicoesScreen({ navigation }) {
  const [busca, setBusca] = useState("");
  const [itensAdicionados, setItensAdicionados] = useState([]);

  const adicionarItem = (item) => {
    setItensAdicionados((prev) => [...prev, item]);
  };

  const alimentosFiltrados = DATA.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.nome}</Text>

      <TouchableOpacity onPress={() => adicionarItem(item)}>
        <Ionicons name="add-circle-outline" size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/volta.png")}
            style={styles.voltaIcon}
          />
        </TouchableOpacity>
      </View>

      {/* USER */}
      <View style={styles.userContainer}>
        <Text style={styles.userText}>(User):</Text>
      </View>

      {/* CONTAINER AZUL */}
      <View style={styles.blueContainer}>
        <Text style={styles.title}>Selecione a refeição:</Text>

        {/* BUSCA */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Procure por um alimento"
            placeholderTextColor="#999"
            style={styles.input}
            value={busca}
            onChangeText={setBusca}
          />
          <View style={styles.searchButton}>
            <Ionicons name="search" size={22} color="#fff" />
          </View>
        </View>

        {/* LISTA */}
        <FlatList
          data={alimentosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          scrollEnabled={false} // desabilita scroll do FlatList para usar ScrollView
          ListFooterComponent={
            <View style={styles.addedButton}>
              <Ionicons name="bag-handle-outline" size={20} color="#000" />
              <Text style={styles.addedText}>
                Itens adicionados: {itensAdicionados.length}
              </Text>
            </View>
          }
        />
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Image
            source={require("../assets/inicio.png")}
            style={styles.footerIconLarge}
          />
          <Text style={styles.footerText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image
            source={require("../assets/servicos.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Serviços</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image
            source={require("../assets/configuracoes.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Config.</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
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
    paddingTop: 50, // mesmo que a tela BPM
    paddingHorizontal: 5,
  },

  voltaIcon: {
    width: 160,
    height: 70,
    resizeMode: "contain",
  },

  userContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  userText: {
    fontSize: 23,
    color: "#000",
  },

  blueContainer: {
    backgroundColor: "#00BCD4",
    borderTopRightRadius: 60,
    padding: 20,
    paddingBottom: 50,
  },

  title: {
    fontSize: 18,
    marginBottom: 15,
    color: "#000",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 45,
  },

  searchButton: {
    backgroundColor: "#E53935",
    marginLeft: 10,
    padding: 10,
    borderRadius: 25,
  },

  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemText: {
    fontSize: 16,
    fontWeight: "500",
  },

  addedButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    width: "86%",
    alignSelf: "center",
  },

  addedText: {
    marginLeft: 8,
    fontWeight: "600",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },

  footerItem: {
    alignItems: "center",
  },

  footerIcon: {
    width: 45,
    height: 38,
    marginBottom: 4,
    resizeMode: "contain",
  },

  footerIconLarge: {
    width: 52,
    height: 40,
    marginBottom: 4,
    resizeMode: "contain",
  },

  footerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
  },
});