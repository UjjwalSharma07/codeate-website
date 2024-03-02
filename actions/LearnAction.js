import * as api from '../pages/api/CoursesAPI'

// Action creator

export const getCourse = () => async (dispatch) =>{
    try {
        const {data} = await api.fetchAllCourses();
        dispatch({type: 'FETCH_ALL_Courses' , payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const createCourse =(Course) =>async (dispatch) =>{
    try {
        const {data} = await api.createCourse(Course)
        dispatch({type: 'CREATE_Course' , payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updateCourse = (id, Course) =>async (dispatch) =>{
    try {
        const {data} = await api.updateCourse(id, Course)
        dispatch({type: 'UPDATE_Course' , payload: data})
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteCourse = (id) =>async (dispatch) =>{
    try {
        await api.deleteCourse(id);
        dispatch({type:'DELETE_Course', payload:id})
        console.log('deleted');
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