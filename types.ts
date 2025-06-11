export type RootStackParamList = {
  Category: { categoryName: string } ;
  Recipe: { mealId: string, color:string };
};

  type Ingredient = {
    name: string;
    amount: string;
  };
  export type Recipe = {
    id: string;
    name: string;
    category: string;
    area: string;
    instructions: string;
    image: string;
    tags: string[];
    youtube: string;
    ingredients: Ingredient[];
  };

  export   type Category = {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  };