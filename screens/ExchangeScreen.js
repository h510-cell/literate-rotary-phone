import React from 'react';
import { StyleSheet, Text, View, Modal, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../Config'

export default class ExchangeScreen extends React.Component{
    constructor(){
        super(
            this.state={
                itemName:"iPhoneX",
                itemDescription:"",
                exchangeId:''
            }
        )
    }

    createUniqueId(){
        return Math.random().toString(5)
    }

    addItem=()=>{
        db.collection('addItem').where('itemName','==',"iPhoneX").add()
        .onSnapshot((snapshot)=>{
            var itemName = snapshot.docs.map((docs)=>doc.data())
            var exchangeId = this.createUniqueId();
              this.setState({
                  itemName:itemName,
                  exchangeId:exchangeId
              })
            })
    }

    componentDidMount(){
        this.addItem()
    }

render(){
    return(
        <Modal>
        <KeyboardAvoidingView>
        <View>
          <TextInput
          placeholder={"itemName"}
          maxLength={8}
          onChangeText={(text)=>{
              this.setState({
                  itemName:text
              })
          }}
          />
          <TextInput
          placeholder={"itemDescription"}
          maxLength={8}
          onChangeText={(text)=>{
              this.setState({
                  itemDescription:text
              })
          }}
          />
        </View>
        <View>
         <TouchableOpacity style={styles.AddItembutton}
         onPress={()=>
        this.addItem(this.state.itemName,this.state.itemDescription)
        }
         >
           <Text>AddItem</Text>
         </TouchableOpacity>       
        </View>    
       </KeyboardAvoidingView>
       </Modal>   
    )
}
}

const styles = StyleSheet.create({
    AddItembutton:{
        width:300,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"rgb(0,0,225)"
    }
})