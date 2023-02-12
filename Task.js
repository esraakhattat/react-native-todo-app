import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox, TextInput } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Task(props){
    // const item=props.task
    const [item,setTask] = useState(props.task)

    const [itemStatus,setItemStatus] = useState('unchecked')
    return(
        <>
        <View style={styles.todoCard}>
            <View style={styles.task}>
        <MaterialCommunityIcons style={{...styles.btnTxt,textAlign:'left'}} name='pencil' color={'#7463ad'} size={20} onPress={()=>props.handleEdit(item.taskId)}/>
        <MaterialCommunityIcons style={{...styles.btnTxt,textAlign:'left',marginStart:15}} name='close' color={'#7463ad'} size={20} onPress={()=>props.handleRemove(item.taskId)}/>
</View>
            <View style={styles.task}><Checkbox
            status={itemStatus}
            onPress={() => {
                setTask({...item,isDone:!item.isDone});
                setItemStatus(item.isDone ? 'unchecked' : 'checked')
            }}
          /><Text style={{...styles.btnTxt,textDecorationLine:item.isDone?'line-through':'none'}}>{item.task}</Text>
          </View>
          </View>
        </>
    )
}
const styles = StyleSheet.create({
    todoCard: {
        padding: 10,
        // borderColor: 'black',
        // borderWidth: 1,
        marginVertical: 10,
        borderRadius: 50,
        shadowColor: '#171717',
        backgroundColor:'white',
        elevation:5, 
        display:'flex',
        flexDirection:'row-reverse' ,
        justifyContent:'space-between'
    },
    btn:{
        backgroundColor:'#7463ad',
        padding:10,
        borderRadius:35,
        width:50,
        marginVertical:10,
        alignSelf:'center',
        textAlign:'center'
    },
    btnTxt:{
        textAlign:'center',
        marginTop:7,
    },
    task:{
        display:'flex',
        flexDirection:'row',
    }
})