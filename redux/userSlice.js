import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
}

export const userSlice = createSlice({
    name:"userData",
    initialState,
    reducers:{
        addData: function (state,action){
            console.log("payload", action.payload)
           if(action.payload){
            state = action.payload
           }
        } 
    }
})


export const {addData  } = userSlice.actions

export default userSlice.reducer


