const activeTabChangeReducer = (state = 'Feed', action) => {
    switch(action.type){
        case 'ACTIVE_TAB_CHANGE':
            return action.payload;
        default:
            return state;
    }
};
export default activeTabChangeReducer;