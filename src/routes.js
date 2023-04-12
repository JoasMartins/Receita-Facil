import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react";
import { Image } from "react-native";

import { Home } from "./screens/home"
import { Favorites } from "./screens/favorites"


const Tab = createBottomTabNavigator()

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#121212",

                tabBarStyle: {
                    backgroundColor: "#262626",
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return (<Image source={require("../src/imgs/icons/home_yesPrass.png")} style={{height: 30, width: 30}}/>)
                        } else {
                            return (<Image source={require("../src/imgs/icons/home_noPrass.png")}  style={{height: 30, width: 30}}/>)
                        }
                    }
                }}
            />

            <Tab.Screen
                name="FavoritesTab"
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return (<Image source={require("../src/imgs/icons/library_yesPrass.png")} style={{height: 30, width: 30}}/>)
                        } else {
                            return (<Image source={require("../src/imgs/icons/library_noPrass.png")}  style={{height: 30, width: 30}}/>)
                        }
                    }
                }}
            />
        </Tab.Navigator>
    )
}