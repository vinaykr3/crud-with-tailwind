let InitialState = {
    toggle : "hidden",
    update: [],
}

const toggleReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SHOW':
            // console.log(action.payload);
            return {...state, toggle: "flex", update: action.payload }
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
            // console.log( updatedTags);
            // const {tags} = state.update;
            // const tag = action.payload;
            console.log({ ...state })
            return {...state, [state.update.tags] : updatedTags }
        default:
            return state;
    }
}

export default toggleReducer;