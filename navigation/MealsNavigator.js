import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import MealDetails from '../screens/MealDetails';
import MealsScreen from '../screens/MealsScreen'
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen'

const FavMealStackNavigator = createStackNavigator({
    Favorites: FavouritesScreen,
    MealDetail: MealDetails
}, {
    mode: "modal",
    defaultNavigationOptions: {
        headerShown: false,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ?  Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary
    }
});



const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Favorites: FavMealStackNavigator,
    CategoryMeals: MealsScreen,

    MealDetail: MealDetails,
    Filter: FiltersScreen

}, {
    mode: "modal",
    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: Platform.OS === 'android' ?  Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary
    }
});

export default createAppContainer(MealsNavigator);