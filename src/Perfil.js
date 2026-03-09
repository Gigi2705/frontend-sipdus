
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PerfilScreen({ navigation }) {

  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [genero, setGenero] = useState("");
  const [emailSenha, setEmailSenha] = useState("");
  const [mostrarGenero, setMostrarGenero] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

    const formatarData = (texto) => {
  let numeros = texto.replace(/\D/g, "");

  if (numeros.length > 8) {
    numeros = numeros.slice(0, 8);
  }

  if (numeros.length >= 5) {
    return numeros.replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3");
  } else if (numeros.length >= 3) {
    return numeros.replace(/(\d{2})(\d{1,2})/, "$1/$2");
  }

  return numeros;
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >

      {/* Barra superior */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/volta.png")} style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      {/* Nome da tela */}
      <View style={styles.greetingWhite}>
        <Text style={styles.logo}>Perfil:</Text>
      </View>

      {/* Container azul */}
      <View style={styles.contentContainer}>

        {/* Foto de perfil */}
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/avatar.jpg")}
            style={styles.avatar}
          />

          <TouchableOpacity style={styles.cameraButton}>
            <Ionicons name="camera" size={22} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Nome */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nome de usuário"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />
          <Image source={require("../assets/user.png")} style={styles.icon}/>
        </View>

        {/* Data nascimento */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="DD/MM/AAAA"
            style={styles.input}
            value={dataNascimento}
            onChangeText={(texto) => setDataNascimento(formatarData(texto))}
            keyboardType="numeric"
          />
          <Image source={require("../assets/calendario.png")} style={styles.icon}/>
        </View>

        {/* Genero */}
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => setMostrarGenero(!mostrarGenero)}
        >
          <Text style={styles.input}>
            {genero ? genero : "Gênero (Opcional)"}
          </Text>
          <Image source={require("../assets/genero.png")} style={styles.icon}/>
        </TouchableOpacity>

        {mostrarGenero && (
          <View style={styles.opcoesGenero}>
            <TouchableOpacity onPress={() => {setGenero("Feminino"); setMostrarGenero(false);}}>
              <Text style={styles.opcaoTexto}>Feminino</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setGenero("Masculino"); setMostrarGenero(false);}}>
              <Text style={styles.opcaoTexto}>Masculino</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setGenero("Prefiro não informar"); setMostrarGenero(false);}}>
              <Text style={styles.opcaoTexto}>Prefiro não informar</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Email */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email cadastrado"
            style={styles.input}
            value={emailSenha}
            onChangeText={setEmailSenha}
          />
          <Image source={require("../assets/chave.png")} style={styles.icon}/>
        </View>

        {/* Senha com olho */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={!mostrarSenha}
          />

          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Ionicons
              name={mostrarSenha ? "eye-off" : "eye"}
              size={22}
              color="#000000"
            />
          </TouchableOpacity>
        </View>

        {/* Botão salvar */}
        <TouchableOpacity style={styles.botaoSalvar}>
          <Text style={styles.textoSalvar}>Salvar</Text>
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

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },

  backIcon: {
    width: 160,
    height: 70,
    resizeMode: "contain",
  },

  greetingWhite: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },

  logo: {
    fontSize: 22,
    color: "#000000",
  },

  contentContainer: {
    flex: 1,
    backgroundColor: "#00BCD4",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 0,
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 50,
    marginTop: 10
  },

  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
  },

  avatar: {
    width: 160,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
  },

  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#E53935",
    padding: 10,
    borderRadius: 25,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    width: "85%",
    paddingHorizontal: 15,
    marginVertical: 10,
    height: 48,
  },

  input: {
    flex: 1,
    fontSize: 14,
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: 5
  },

  opcoesGenero: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 20,
    paddingVertical: 10,
    marginTop: -5,
  },

  opcaoTexto: {
    paddingVertical: 8,
    textAlign: "center",
    fontSize: 14,
  },

  botaoSalvar: {
    backgroundColor: "#ffffff",
    width: "90%",
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 30,
    alignItems: "center",
  },

  textoSalvar: {
    color: "#E53935",
    fontSize: 16,
    fontWeight: "bold",
  },

});

