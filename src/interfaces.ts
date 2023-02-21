export interface IRootState {
    chefs :Ichefs,
    restaurants :Irestaurants,
    dishes :Idishes,
}

export interface Irestaurants {
    value: IrestaurantsValue[]
}

export interface IrestaurantsValue {
    id?:string,
    img?:string,
    alt?:string,
    name?: string,
    chef?: string,
    rating?: string,
    openingHours?: string,
    address?:string,
    dishes?: number[],
    isPopular?: boolean,
    isNew?: boolean,
    isOpen?: boolean,
    map?: boolean,
}

export interface Ichefs {
    value: IchefsValue[]
}

export interface IchefsValue {
    firstName: any
    id?:string,
    name?: string,
    info?: string,
    portrait?: string,
    restaurants?: string[],
    isChefOfTheWeek?: boolean,
    isNew?: boolean,
    mostViewed?:boolean,
}

export interface Idishes {
    value: IdishesValue[]
}

export interface IdishesValue {
    id?:string,
    img?: string,
    name?: string,
    restaurant?: string,
    ingredients?: string,
    isSpicy?: string,
    isVegitarian?: string,
    isVegan?: string,
    price?: string,
    optionalSides?: string[],
    optionalChanges?: string[],
    isPopular?: boolean
}


export interface Iprops {
    class?: string,
    id?:string,
    src?: string,
    alt?:string,
    name?:string,
    spicy?: string,
    vegitarian?: string,
    vegan?: string,
    ingredients?:string,
    price?:string
}

// export interface IOneRestDetails {
//     id?:string,
//     img?: string,
//     alt?: string,
//     name?: string,
//     chef?: string,
//     isOpen?: boolean,
// }