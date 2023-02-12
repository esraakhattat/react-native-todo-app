import { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Checkbox, TextInput } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Task from "./Task";

export default function Todo() {
    // const [id,setId]=useState(0)
    const [todos, setTodos] = useState([])
    const [isEditing,setIsEditing]=useState(false)
    const [task, setTask] = useState({ taskId: -1, task: '', isDone: false })
    const [edit, setEdit] = useState()
    function handleTaskChange(e) {
        setTask({ ...task, task: e })
    }
    function handleTaskAdd() {
        if (task.task == '') {
            alert('Empty Input Field')
        }
        else {
            setTask({ ...task, taskId: task.taskId++ })
            setTodos([...todos, task])
            setTask({ ...task, task: '', isDone: false })
        }
    }
    const handleRemove = (id) => {
        setTodos(todos.filter((value) => value.taskId != id))
    }
    const handleEdit=(id)=>{
        setEdit(todos.filter((value) => value.taskId == id)[0])
        setIsEditing(true)

    }
    const handleTaskEdit=()=>{
        const newTodos = [...todos];
        let objIndex = newTodos.findIndex((obj) => obj.taskId == edit.taskId);
            newTodos[objIndex].task=task.task

        setTodos(newTodos)
            setTask({ ...task, task: '', isDone: false })
        setIsEditing(false)
    }
    return <SafeAreaView style={styles.container}>
        <TextInput value={task.task} onChangeText={handleTaskChange} placeholder="add to do list" mode="outlined" label="Task" />
            {!isEditing?
        <TouchableOpacity onPress={handleTaskAdd} style={styles.btn}>
            <MaterialCommunityIcons style={styles.btnTxt} name='plus' color={'white'} size={20} />
        </TouchableOpacity>
            :<TouchableOpacity onPress={handleTaskEdit} style={styles.btn}>
            <MaterialCommunityIcons style={styles.btnTxt} name='pencil' color={'white'} size={20} />
            </TouchableOpacity>

            }
        <FlatList
            data={todos}
            renderItem={({ item }) => <Task handleEdit={handleEdit} handleRemove={handleRemove} task={item} />}
            keyExtractor={item => item.taskId}
        />
    </SafeAreaView>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        padding: 30
    },
    todoCard: {
        padding: 10,
        // borderColor: 'black',
        // borderWidth: 1,
        marginVertical: 10,
        borderRadius: 50,
        shadowColor: '#171717',
        backgroundColor: 'white',
        elevation: 5,
        display: 'flex',
        flexDirection: 'row'
    },
    btn: {
        backgroundColor: '#7463ad',
        padding: 10,
        borderRadius: 35,
        width: 50,
        marginVertical: 10,
        alignSelf: 'center',
        textAlign: 'center'
    },
    btnTxt: {
        // color:'white',
        textAlign: 'center',
        // fontSize:12
    }
})