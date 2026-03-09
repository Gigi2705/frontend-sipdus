import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function MenuLateral({ navigation }) {
  return (
    <View style={styles.container}>

      {/* TOPO */}
      <View style={styles.header}>
        
        {/* IMAGEM DO MENU NO LUGAR DO TEXTO SIPDUS */}
        <Image
          source={require("../assets/menu.png")}
          style={styles.logoImage}
        />

        <View style={styles.userContainer}>
          <Image
            source={require("../assets/vatar.png")}
            style={styles.userIcon}
          />
          <Text style={styles.userText}>(User)</Text>
        </View>

      </View>

      {/* BOTÕES */}
      <View style={styles.menuItems}>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Meu perfil</Text>
          <Image
            source={require("../assets/user.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Configurações</Text>
          <Image
            source={require("../assets/config.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Medicações</Text>
          <Image
            source={require("../assets/star.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

      </View>

      {/* BOTÃO SAIR */}
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#EEEFEF",
paddingTop:50,
paddingHorizontal:20
},

header:{
marginBottom:40
},

logoImage:{
width:120,
height:60,
resizeMode:"contain",
marginBottom:20
},

userContainer:{
flexDirection:"row",
alignItems:"center"
},

userIcon:{
width:40,
height:40,
marginRight:10
},

userText:{
fontSize:18,
fontWeight:"bold"
},

menuItems:{
gap:15
},

button:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
borderWidth:1,
borderColor:"#00BCD4",
padding:12,
borderRadius:6
},

buttonText:{
fontSize:16
},

icon:{
width:24,
height:24,
resizeMode:"contain"
},

logout:{
marginTop:290,
borderWidth:1,
borderColor:"#00BCD4",
padding:12,
borderRadius:6,
alignItems:"center",

},

logoutText:{
fontSize:16,
fontWeight:"bold",
 color: "#E53935"
}

});

