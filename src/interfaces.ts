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
    name?: string,
    chef?: string,
    rating?: string,
    openingHours?: string,
    address?:string,
    dishes?: number[],
    isPopular?: Boolean,
    isNew?: Boolean,
    isOpen?: Boolean,
    map?: Boolean,
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
    isChefOfTheWeek?: Boolean,
    isNew?: Boolean,
    mostViewed?:Boolean,
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
    isPopular?: Boolean
}


export interface Iprops {
    class?: string,
    src?: string,
    alt?:string,
    name?:string,
    spicy?: string,
    vegitarian?: string,
    vegan?: string,
    ingredients?:string,
    price?:string
}

export interface IOneRest {
    img?: string,
    name?: string,
    chefName?: string,
    isOpen?: Boolean,
}