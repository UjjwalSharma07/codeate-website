import * as api from '../pages/api/EventsAPI'

// Action creator
export const getEvent = () => async (dispatch) =>{
    try {
        const {data} = await api.fetchAllEvents();
        dispatch({type: 'FETCH_ALL_Events', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const createEvent =(Event) =>async (dispatch) =>{
    try {
        const {data} = await api.createEvent(Event)
        dispatch({type: 'CREATE_Event' , payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updateEvent = (id, Event) =>async (dispatch) =>{
    try {
        const {data} = await api.updateEvent(id, Event)
        dispatch({type: 'UPDATE_Event' , payload: data})
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteEvent = (id) =>async (dispatch) =>{
    try {
        await api.deleteEvent(id);
        dispatch({type:'DELETE_Event', payload:id})
        console.log('====================================');
        console.log('Event deleted');
        console.log('====================================');
    } catch (error) {
        console.log(error);
    }
}

// export const updateLike = (id) => async (dispatch) =>{
//     try {
//         const {data} = await api.updateLike(id)
//         dispatch({type: 'LIKE', payload: data})
//     } catch (error) {
//         console.log(error);
//     }
// }