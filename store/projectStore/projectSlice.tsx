'use client'
import { projects } from "@/lib/projects"
import { FetchedRepoInfo, ProjectInfo } from "@/lib/types"
import { createSlice } from "@reduxjs/toolkit"

const initialState: ProjectInfo[] = [...projects]

const projectSlice = createSlice({
    name:'projects', 
    initialState,
    reducers: {
        setProjects: (state, action) => {
            return state =  [...state, action.payload]
        },
        addFetchedInfo: (state, action: {payload: {title: string, info: FetchedRepoInfo}}) => {
            //const upd = state.find((st) => st.page)
            return state=state.map( st => {
                if (st.page == action.payload.title) {
                   console.log('first', action.payload)
                   st = {...st, ...action.payload.info}
                   console.log('st', st)
                   return st
                } else return st
            })
        },
        removeProject: (state, action) => {
            state = state.splice(state.findIndex(e => e.title === action.payload))
        },
    }
})

export const {setProjects, addFetchedInfo, removeProject} = projectSlice.actions

export default projectSlice.reducer