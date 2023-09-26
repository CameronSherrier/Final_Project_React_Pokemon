import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'Name',
        type: 'Type',
        hp: 'Hp',
        attack: 'Attack',
        defense: 'Defense',
        speed: 'Speed'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseType: (state, action) => { state.type = action.payload },
        chooseHp: (state, action) => { state.hp = action.payload },
        chooseAttack: (state, action) => { state.attack = action.payload },
        chooseDefense: (state, action) => { state.defense = action.payload },
        chooseSpeed: (state, action) => { state.speed = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseType, chooseHp, chooseAttack, chooseDefense, chooseSpeed } = rootSlice.actions;