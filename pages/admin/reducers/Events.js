export default  (events =[], action) =>{
    switch (action.type) {
        case 'DELETE_Event':
            return events.filter((post)=> post._id !== action.payload);
        case 'UPDATE_Event':
        // case 'LIKE':
            return events.map((post)=> post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL_Events':
            return action.payload;
        case 'CREATE_Event' :
            return [...events, action.payload]
    
        default:
            return events;
            
    }
}