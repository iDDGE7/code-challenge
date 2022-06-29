import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, addNewCategory, getAllEmojis } from "@state";

const useCategoriesSearch = () => {
    /**
     * * useCategoriesSearch
     * Hook para manipular acciones del buscador,
     * Contiene los estados de Las categorias y
     * de un set de datos de emojis para agregar a las nuevas categorias.
     * Si la palabra que se escribe hace match con algun emoji, este se agrega automaticamente.
     *
     */

    const dispatch = useDispatch();
    // Lista de categorias
    const AllCategories = useSelector((state) => state.categories.AllCategories);
    // Lista de Emojis
    const AllEmojis = useSelector((state) => state.emojis.AllEmojis);
    // Categorias Filtradas
    const [filterCategories, setFilterCategories] = useState([]);
    // Estado para saber si el Input esta enfocado.
    const [focusSearch, setFocusSearch] = useState(false);
    // Texto que está ingresando el usuario
    const [inputSearch, setInputSearch] = useState("");

    // si no se han obtenido los emojis y las categorias se hace un distpatch para consurmirlos
    useEffect(() => {
        if (AllEmojis.length === 0) {
            dispatch(getAllEmojis());
        }
        if (AllCategories.length === 0) {
            dispatch(getAllCategories());
        }
    }, [AllEmojis, AllCategories, dispatch]);

    useEffect(() => {
        // si se enfoca el input pero sin escribir se muestran todas las categorias
        if (AllCategories && AllCategories.length > 0 && inputSearch === "" && focusSearch) {
            setFilterCategories(AllCategories);
        }

        // si se desenfoca el input se dejan de mostrar todas las categorias
        if (AllCategories && AllCategories.length > 0 && inputSearch === "" && !focusSearch) {
            setFilterCategories([]);
        }

        // Se filtran las categorias que incluyen parte de lo que el usuario escribe
        if (AllCategories && AllCategories.length > 0 && inputSearch !== "" && focusSearch) {
            const filterData = AllCategories.filter(({ name }) => {
                return name.toLowerCase().includes(inputSearch.toLowerCase());
            });
            setFilterCategories(filterData);
        }
    }, [inputSearch, AllCategories, focusSearch]);

    // Funcion para obtener un emoji de acuerdo a lo que el usuario escribe.
    const getOneEmoji = ({ AllEmojis, category }) => {
        const emoji = AllEmojis.filter(({ keywords }) => {
            // Lista de palabras claves del emoji
            const listKeyWords = keywords.split(" ");
            // Lista de palabras que el usuario escribe
            const listTypedWord = category.split(" ");
            // se filtra los emojis que hacen match entre las palabras del usuario y las keywords
            const hasword = listTypedWord.filter((word) => listKeyWords.includes(word));
            if (hasword.length > 0) {
                return true;
            } else {
                return false;
            }
        });

        return emoji;
    };

    const handleKeyDown = (event) => {
        // Al presionar enter se agrega una nueva categoria en caso de que la misma no este en la lista
        if (event.key === "Enter" && inputSearch !== "" && filterCategories.length === 0) {
            const emoji = getOneEmoji({ AllEmojis, category: inputSearch });

            // Se agrega una nueva categoria haciendo un dispatch, si no encuentra un emoji, se agrega por defecto 🆕
            dispatch(
                addNewCategory({
                    id: AllCategories.length + 1,
                    name: inputSearch,
                    icon: emoji.length === 0 ? "🆕" : emoji[0].symbol,
                })
            );
        }
    };

    // Input Enfocado
    const onFocus = (e) => {
        setFocusSearch(true);
    };

    // Input Desenfocado
    const onBlur = (e) => {
        setFocusSearch(false);
    };

    // Input Cambiando de valor
    const onChangeValue = (e) => {
        setInputSearch(e.target.value);
    };

    return {
        inputSearch,
        filterCategories,
        onChangeValue,
        onFocus,
        onBlur,
        handleKeyDown,
    };
};

export default useCategoriesSearch;
