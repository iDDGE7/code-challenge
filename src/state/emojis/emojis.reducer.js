const initialstate = {
    AllEmojis: []
};
// reducer para manipular el estado de los emojis
const emojisReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case "@emojis/getAllEmojis":
            return { ...state, AllEmojis: payload };
        default:
            return state;
    }
};

export default emojisReducer;
