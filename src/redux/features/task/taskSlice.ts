import { RootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";




interface InitialState {
    tasks:ITask[],
    filter:"all" |"low" | "medium" | "high" 
}

const initialState:InitialState = {
    tasks:[
        {
            id:"tgVYgD_7wTJbGaj5Dif9s",
            isCompleted:false,
            title:"dff",
            description:"afd",
            priority:"medium",
            dueDate:"2025-01-20T18:00:00.000Z",
        }
    ],
    filter:"all"
}

type DraftTask = Pick<ITask,"title" | "description" | "dueDate" | "priority">

const createTask  = (task:DraftTask):ITask =>{
    return {id:nanoid(),isCompleted:false,...task}
}


const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask:(state,action:PayloadAction<ITask>) =>{
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        },
        toggleCompleteState:(state,action:PayloadAction<string>)=>{
            console.log(action.payload)
            state.tasks.forEach((task)=>task.id === action.payload ? task.isCompleted= !task.isCompleted: task)
        },

        deleteTask:(state,action:PayloadAction<string>)=>{
            state.tasks = state.tasks.filter((task)=> task.id !== action.payload)
        },
        updateFilter:(state,action:PayloadAction<"all" | "low" | "medium" | "high">)=>{
            state.filter = action.payload
        }

    }
})

export const selectTasks = (state:RootState)=> //eta data k store theke ui(component) te nite use kora hyse
{
    const filter = state.todo.filter

    if(filter ==="low")
    {
        return state.todo.tasks.filter(task => task.priority === "low")
    }
    else if(filter ==="medium")
    {
        return state.todo.tasks.filter(task => task.priority === "medium")
    }
    else if(filter ==="high")
    {
        return state.todo.tasks.filter(task => task.priority === "high")
    }
    else{
        return state.todo.tasks
    }
    
}

export const {addTask,toggleCompleteState,deleteTask,updateFilter} = taskSlice.actions //eta ui theke dispatch erpr action hoi e reducer er maddhome store e save korte use kora hocce

export default taskSlice.reducer