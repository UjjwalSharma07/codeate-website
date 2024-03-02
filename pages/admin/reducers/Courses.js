export default (course= [], action) =>{
    switch (action.type) {
        case 'DELETE_Course':
            return course.filter((post)=> post._id !== action.payload);
        case 'UPDATE_Course':
        // case 'LIKE':
            return course.map((post)=> post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL_Courses':
            return action.payload;
        case 'CREATE_Course' :
            return [...course, action.payload]
    
        default:
            return course;
            
    }
}