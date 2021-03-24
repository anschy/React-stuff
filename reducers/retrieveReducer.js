const initialState = {pageCount: 1};

const retrieveReducer = (state= initialState, action) => {
    switch(action.type){
        case "get":
            return {
                ...state,
                pageCount: state.pageCount,
            }
        case "post":
            return {
                ...state,
                pageCount: state.pageCount+1,
            }
        default:
            console.log("default", action.type);
            return state;
    }
};
export default retrieveReducer;