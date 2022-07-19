const InitialState = {
    Items: [],
    toggle : "hidden",
    update: [],
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
        case "SHOW":
            const findItem = state.Items.find(item => item.Timestamp === action.payload);
            return {...state, toggle: "flex", update: findItem}
        case 'HIDE':
            return {...state, toggle: "hidden" }
        case 'REMOVE_TAG':
                // console.log(action.payload);
            const leftOver = state.update.tags.filter((tagData, index) => {
                return index !== action.payload;
            })
            const leftOvered = state.update.tags = leftOver;
            return {...state, [state.update.tags] : leftOvered}
        case 'ADD_TAG':
            const updatedTags = state.update.tags.push(action.payload);
            return {...state, [state.update.tags] : updatedTags }
        case "UPDATE_DATA":
            const ItemsObj = state.Items.find((item) => item.Timestamp);
            console.log(ItemsObj.Timestamp);
            console.log(action.payload);
            return {...state};
        default:
            return state;
    }
}

export { dataReducer };
