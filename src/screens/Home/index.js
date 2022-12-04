import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  // TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { TextInput } from 'react-native-paper';
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as vh,
} from 'react-native-responsive-screen';
import Images from "../../utils/images";
import { Colors } from "../../utils/AppConstant";
import { useNavigation } from "@react-navigation/native";
 
export default function Home() {
    const navigation = useNavigation()
 
 
  return (
    <View style={styles.container}>
    
    <View style={{backgroundColor: "#0000B9", paddingHorizontal:5, justifyContent:'space-between', alignItems:'center', flexDirection:'row', height:45, width:'100%'}}>

    <Image resizeMode="center" source={Images.User} style={{height:50, top:2, width:50}}/>

    <Image resizeMode="center" source={Images.Logo} style={{height:32, justifyContent:'center', width:100}}/>

    <Image resizeMode="center" source={Images.Notification} style={{height:22, justifyContent:'center', width:22}}/>

    </View>


    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  imgView: {
    alignSelf: 'center',
    width:'100%',
    marginTop:-vh(5),
  },
  img: {
    width: vw(50),
    height: vh(20),
    borderRadius: 20,
    alignSelf: 'center',
  },
  img1: {
    width: vw(25),
    height: vh(10),
    borderRadius: 5,
    alignSelf: 'center',
    marginTop:vh(3),
  },
  userimg: {
    width: vw(15),
    height: vh(12),
    borderRadius: 20,
    alignSelf: 'center',
    marginTop:-vh(4),
  },
  inputView: {
    borderRadius: 5,
    borderColor:'grey',
    // borderWidth:1,
    width: "95%",
    height: 45,
    marginBottom: 20,
    alignSelf: "center",
    marginLeft:30
  },
 
  TextInput: {
    height: 50,
    width:'90%',
    // flex: 1,
    // padding: 10,
    // marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 20,
    alignSelf:'flex-end',
    marginRight:28,
    color: "black",
    // marginTop:-vh(1),
  },
 
  loginBtn: {
    width: "80%",
    // borderRadius: 25,
    height: 50,
    alignItems: "center",
    alignSelf:'center',
    justifyContent: "center",
    marginTop:-vh(2),
    backgroundColor: "#0000B9",
  },
  text: {
    height: 30,
    marginBottom: 20,
    alignSelf:'center',
    color: "black",
    marginTop: 9,
  },
  
  img6: {
    width: vw(10),
    height: vh(10),
    // borderRadius: 5,
    alignSelf: 'center',
    marginTop:-vh(3),
  },
});
