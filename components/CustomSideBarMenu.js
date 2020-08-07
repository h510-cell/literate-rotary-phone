import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
          <KeyboardAvoidingView>
          <View style={{flex:1}}>
            <View style={styles.container}>
                <DrawerItems  {...this.props}/>
              </View>    
          </View>
          <View style={styles.logoutContainer}>
            <TouchableOpacity style={styles.logutButton}
            onPress={() =>{
            this.props.navigation.navigate('WelcomScreen')
            firebase.auth().signOut();
            }}>  
            <Text style={styles.text}>Log Out</Text>
            </TouchableOpacity>  
          </View>      
          </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:0.8
  },
  logoutContainer:{
    flex:0.8,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logutButton:{
    height:40,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  text:{
    fontSize:'32',
    fontWeight:'bold'
  }
})