import { RootState } from "@/redux/store";
import { IUser } from "@/types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
    users:IUser[]
}

const initialState :InitialState= {
    users: [
        {
            id:"uoJan92HIJZyNpx9LKsqJ",
            name:"joy"
        },
        {
            id:"uoJan92HIJZyNpx9LKsqJdjfafj",
            name:"subir"
        }
    ]
}

type DraftUser = Pick<IUser,"name">;

const createUser = (userData:DraftUser):IUser=>{
    return {id:nanoid(),...userData}
}

const userSlice = createSlice(
   {
    name:"user",
    initialState,
    reducers:{
        addUser: (state,action:PayloadAction<IUser>)=>{
            state.users.push(createUser(action.payload))
        },
        deleteUser: (state,action:PayloadAction<string>)=>{
           state.users = state.users.filter((user)=> user.id != action.payload)
        }
    }
   }
)

export const selectUsers = (state:RootState) =>{
    return state.user.users
}

export const {addUser,deleteUser} = userSlice.actions

export default userSlice.reducer