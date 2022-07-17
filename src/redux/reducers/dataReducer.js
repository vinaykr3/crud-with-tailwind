const InitialState = {
    Items: [],
};

const dataReducer = (state = InitialState, action) => {
    // console.log(state);
    switch (action.type) {
        case "ADD_DATA":
            // console.log(action.payload);
            return { ...state, Items: [...state.Items, action.payload] }
        case "DELETE":
            // console.log(state.Items);
            const filterItem = state.Items.filter(deleteItem => deleteItem.Timestamp !== action.payload);
            return {...state, Items: filterItem}
        default:
            return state;
    }
}

export { dataReducer };