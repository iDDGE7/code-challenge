import { fetchAllEmojis } from "@services/emojisServices";

// Action para obtener todos los emojis
const getAllEmojis = () => {
    return async (dispatch) => {
        const allEmojis = await fetchAllEmojis();
        dispatch({
            type: "@emojis/getAllEmojis",
            payload: allEmojis
        });
    };
};

export { getAllEmojis };
