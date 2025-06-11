export type RootStackParamList = {
  Home: undefined;
  Category: { categoryName: string } ;
  Recipe: { mealId: string, color:string };
  DrawerNavigator: undefined;
};

export type DrawerParamList = {
  Search: undefined;
  "My recipes": undefined;
};