const initialstate = {
    AllCategories: []
};

// reducer para manipular el estado el estado de las categorias
const categoriesReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case "@categories/getAllCategories":
            return { ...state, AllCategories: payload };
        case "@categories/addNewCategory":
            return {
                ...state, AllCategories: [...state.AllCategories, payload]
            };
        default:
            return state;
    }
};

export default categoriesReducer;
