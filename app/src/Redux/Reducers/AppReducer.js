import INIT_STATE from "../State/AppState";

const AppReducer = function (state = INIT_STATE, action) {
    switch (action.type) {
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };
        case 'SET_ALL_ITEMS':
            return {
                ...state,
                allItems: action.items
            };
        case 'ADD_SELECTED_ITEM':
            return {
                ...state,
                selectedItems: [
                    ...state.selectedItems,
                    action.item
                ]
            };

        default:
            return state;
    }
};

export default AppReducer;