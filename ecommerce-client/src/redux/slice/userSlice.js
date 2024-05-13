import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value:null
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setReduxUser:(state,action)=>{
            console.log("state :",state)
            console.log("action",action)
            state.value=action.payload
        },
        logout:(state,action)=>{
            state.value = null
            localStorage.removeItem("access_token")
        }

    }
})

export const {setReduxUser, logout} = userSlice.actions

export default userSlice.reducer
