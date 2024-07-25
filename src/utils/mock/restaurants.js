import { mocks, mockImages } from ".";
import camelize from "camelize";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if(!mock) reject('location not found');
        resolve(mock);
    })
}

export const transformRestaurants = ({ results = [] }) => {
    const mappedResults = results.map(res => {

        res.photos = res.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });
      
        return {
            ...res,
            isOpen: res.opening_hours && res.opening_hours.open_now,
            isClosedTemporarily: res.business_status === "CLOSED_TEMPORARILY"
        }
    })
    return camelize(mappedResults);
}