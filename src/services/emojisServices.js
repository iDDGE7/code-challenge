// Servicio para obtener un diccionario de emojis
const fetchAllEmojis = async () => {
    const data = await fetch("https://raw.githubusercontent.com/ahfarmer/emoji-search/master/src/emojiList.json");

    const emojiList = await data.json();
    return emojiList;
};

export { fetchAllEmojis };
