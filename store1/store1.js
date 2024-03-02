import {create} from 'zustand';

export const useAuthStore = create((set) => ({
    auth : {
        username : '',
        active : false
    },
    setUsername : (name) => set((state) => ({ auth : { ...state.auth, username : name }})) 
}))

export const useIsAuth = create((set) => ({
    auth : {
        isAuth : '',
    },
    setUsername : (val) => set((state) => ({ auth : { ...state.auth, isAuth : val }})) 
}))

export const useCurrentId = create((set) => ({
    auth : {
        currentid : '',
        active: false
    },
    setCurrentI : (id) => set((state) => ({ auth : { ...state.auth, currentid : id }})) 
}))

export const useInData = create((set) => ({
    auth : {
        indata : null,
        active: false
    },
    setData : (data) => set((state) => ({ auth : { ...state.auth, indata : data }})) 
}))


export const useEventInData = create((set) => ({
    auth : {
        event : null,
        active: false
    },
    setEvent : (data) => set((state) => ({ auth : { ...state.auth, event : data }})) 
}))

export const useBuildInData = create((set) => ({
    auth : {
        build : null,
        active: false
    },
    setBuild : (data) => set((state) => ({ auth : { ...state.auth, build : data }})) 
}))

export const useAProjectData = create((set) => ({
    auth : {
        title:"",
        active: true
    },
    setProject : (data) => set((state) => ({ auth : { ...state.auth, title : data }})) 
}))

export const useUserCourse = create((set) => ({
    auth : {
        usercourse :'',
        active: false
    },
    setUserCourse : (data) => set((state) => ({ auth : { ...state.auth, usercourse : data }})) 
}))

export const useToken = create((set) => ({
    auth : {
        globaltoken :'',
        active: false
    },
    setGlobalToken : (string) => set((state) => ({ auth : { ...state.auth, token : string }})) 
}))

export const useId = create((set) => ({
    auth : {
        id : '',
        active: false
    },
    setId : (id) => set((state) => ({ auth : { ...state.auth, id : id }})) 
}))