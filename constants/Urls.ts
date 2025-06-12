export const backend = process.env.EXPO_PUBLIC_BACKEND_URL;

export const getCategories = async () => {
    const response = await fetch(`${backend}/recipes/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await response.json();
}

export const getRecipesByCategoryName = async (name: string) => {

    const response = await fetch(`${backend}/recipes/${name}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await response.json();
}

export const getRecipeById = async (id: string) => {

    const response = await fetch(`${backend}/recipes/recipe/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await response.json();
}

export const getFavoritesRecipes = async (id: string[]) => {

    const response = await fetch(`${backend}/recipes/favoritesRecipes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            favoritesId: id
        }),
    });

    return await response.json();
}