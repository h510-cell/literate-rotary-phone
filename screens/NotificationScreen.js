import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NotificationScreen extends React.Component{
    constructor(){
        super(
            this.state={
             userId : firebase.auth().currentUser.email,
             allNotification : []
            }
             )
             this.notificationRef=null
    }

    getNotification=()=>{
        db.collection('all_notification')
        .where("Notification_status","==","unread")
        .where("take_user","==",this.state.userId)
        .onSnapshot((snapshot)=>{
            var allNotification = []
            snapshot.docs.map((doc)=>{
                var notification = doc.data()
                notification["doc_id"]=doc.id
                allNotification.push(notification)
            })
            this.setState({
                allNotification:allNotification
            })
        })
    }
    keyExtractor = (item,index)=>index.toString()

    componentDidMount(){
     this.getNotification()
    }
    componentWillUnmount(){
        this.notificationRef
    }
 render(){
     return(
        <View style={styles.container}>
            <View style={styles.Image}>
                ?(
                <Image
                source={require('../assets/Notification icon.png')}/>
                <Text>you have no notifications</Text>
                )
                :(
                <Swipeable flatlist allNotification={this.state.allNotification}/>
                )
            </View>    
        </View>     
     )
 }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#deeeed'
    },
    Image:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})