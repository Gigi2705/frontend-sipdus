import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ConfiguracoesScreen({ navigation }) {

  const renderOption = (titulo, icon, danger = false) => (
    <TouchableOpacity style={styles.option} activeOpacity={0.7}>

      <Text style={[styles.optionText, danger && styles.dangerText]}>
        {titulo}
      </Text>

      <View style={styles.iconBox}>
        <Image
          source={icon}
          style={styles.icon}
        />
      </View>

    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      {/* HEADER IGUAL À OUTRA TELA */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/voltar.png")}
            style={styles.voltaIcon}
          />
        </TouchableOpacity>
      </View>

      {/* LOGO */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/sipdus_logo.jpg")}
          style={styles.logo}
        />
      </View>

      {/* CONTAINER AZUL */}
      <View style={styles.blueContainer}>

        <Text style={styles.title}>Configurações</Text>

        {renderOption("Gerenciar Conta", require("../assets/user.png"))}

        {renderOption("Solicitar seus dados", require("../assets/dados.png"))}

        {renderOption("Privacidade", require("../assets/privacidade.png"))}

        {renderOption("Excluir a conta", require("../assets/excluir conta.png"), true)}

        {renderOption("Excluir seus dados", require("../assets/excluir dados.png"), true)}

        {/* BOTÃO SAIR */}
        <TouchableOpacity style={styles.logoutButton}>

          <Text style={styles.logoutText}>Sair</Text>

          <Image
            source={require("../assets/sair.png")}
            style={styles.icon}
          />

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
    width: 280,
    height: 130,
    resizeMode: "contain",
  },

  blueContainer: {
    flex: 1,
    backgroundColor: "#00BCD4",
    borderTopRightRadius: 60,
    padding: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    marginBottom: 20,
    color: "#000",
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F2F2F2",
    width: "85%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 12,
  },

  optionText: {
    fontSize: 15,
    color: "#000",
  },

  dangerText: {
    color: "#E53935",
  },

  iconBox: {
    backgroundColor: "#2DAEC1",
    padding: 6,
    borderRadius: 5,
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    backgroundColor: "#E5E5E5",
    width: "55%",
    paddingVertical: 12,
    borderRadius: 6,
  },

  logoutText: {
    marginRight: 8,
    fontSize: 16,
    color: "#E53935"
  },

});
