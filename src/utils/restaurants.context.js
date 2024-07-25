import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantRequest, transformRestaurants } from "./mock/restaurants";

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    const [ restaurants, setRestaurants ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const retriveRestaurants = () => {
        setIsLoading(true)
        setTimeout(() => {
            restaurantRequest().then(transformRestaurants).then(res => {
                setRestaurants(res);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
        }, 1500)
    }

    useEffect(() => {
        retriveRestaurants();
    }, [])

    return (
        <RestaurantsContext.Provider value={{restaurants: restaurants, isLoading: isLoading}}>
            { children }
        </RestaurantsContext.Provider>
    )
}