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
            return state=state.map( st => {
                return st = {...st, ...action.payload.info}
            })
        },
        removeProject: (state, action) => {
            state = state.splice(state.findIndex(e => e.title === action.payload))
        },
    }
})

export const {setProjects, addFetchedInfo, removeProject} = projectSlice.actions

export default projectSlice.reducer