// exports de todos los reducers y actions
export { default as categoriesReducer } from "./categories/categories.reducer";
export { default as emojisReducer } from "./emojis/emojis.reducer";
export { getAllCategories, addNewCategory } from "./categories/categories.action";
export { getAllEmojis } from "./emojis/emojis.actions";
