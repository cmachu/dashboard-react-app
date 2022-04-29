export const setIsLoading = (isLoading) => {
    return {
        type: 'SET_IS_LOADING',
        isLoading: isLoading
    }
};

export const setAllItems = (items) => {
    return {
        type: 'SET_ALL_ITEMS',
        items: items
    }
};

export const addToSelectedItems = (item) => {
    return {
        type: 'ADD_SELECTED_ITEM',
        item: item
    }
};