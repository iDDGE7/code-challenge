// Simulacion de fetch con promise para obtener una lista de categorias
const fetchAllCategories = async () => {
    const response = new Promise((resolve) => {
        const categoriesList = [
            { id: 1, name: "Verdulería", icon: "🥗" },
            { id: 2, name: "Farmacia", icon: "💊" },
            {
                id: 3,
                name: "Estación de servicio",
                icon: "🚗",
            },
        ];

        setTimeout(() => {
            resolve(categoriesList);
        }, 300);
    });

    return response;
};

export { fetchAllCategories };
