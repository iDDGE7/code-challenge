import { fetchAllCategories } from "@services/categoryServices";

// Action para consumir categorias y añadirlas al estado global
const getAllCategories = () => {
    return async (dispatch) => {
        const allCategories = await fetchAllCategories();
        dispatch({
            type: "@categories/getAllCategories",
            payload: allCategories,
        });
    };
};
// Action para agregar una nueva categoria
const addNewCategory = (category) => {
    return (dispatch) => {
        dispatch({
            type: "@categories/addNewCategory",
            payload: category,
        });
    };
};

export { getAllCategories, addNewCategory };
