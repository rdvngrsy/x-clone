import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount:{
        id:1,
        username:'rdvngrsy',
        fullname:'Rıdvan Gürsoy',
        avatar: 'https://avatars.githubusercontent.com/u/58063753?v=4'
    },
    accounts:[
        {
            id:1,
            username:'rdvngrsy',
            fullname:'Rıdvan Gürsoy',
            avatar: 'https://avatars.githubusercontent.com/u/58063753?v=4'
        },
        {
            id:2,
            username:'rdvngrsy53',
            fullname:'React Dersleri',
            avatar: 'https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png'
        },
    ]
}

const auth = createSlice({
    name:'auth',
    initialState,
    reducers: {
        _addAccount: (state,action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state,action) => {
            state.accounts = state.accounts.filter(account => account.id != action.payload)
            if(state.currentAccount && action.payload == state.currentAccount.id){
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state,action) => {
            state.currentAccount = action.payload
        }
    }
})

export const {_addAccount,_removeAccount,_setCurrentAccount} = auth.actions
export default auth.reducer