const InitialState = {
    Items: [],
};

const dataReducer = (state = InitialState, action) => {
    console.log(state);
    switch (action.type) {
        case "ADD_DATA":
            console.log(action.payload);
            return { ...state, Items: [...state.Items, action.payload] }
        default:
            return state;
    }
}

export { dataReducer };