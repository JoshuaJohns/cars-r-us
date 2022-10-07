const database = {
    paints: [
        { id: 1, color: 'silver', price: 100 },
        { id: 2, color: 'midnight blue', price: 200 },
        { id: 3, color: 'firebrick red', price: 300 },
        { id: 4, color: 'spring green', price: 400 }
    ],
    interiors: [
        { id: 1, interior: 'beige fabric', price: 100 },
        { id: 2, interior: 'charcoal fabric', price: 200 },
        { id: 3, interior: 'white leather', price: 300 },
        { id: 4, interior: 'black leather', price: 400 }
    ],
    technology: [
        { id: 1, pack: 'basic package', price: 100 },
        { id: 2, pack: 'navigation package', price: 200 },
        { id: 3, pack: 'visibility package', price: 300 },
        { id: 4, pack: 'ultra package', price: 400 }
    ],
    wheels: [
        { id: 1, type: '17-inch pair radial', price: 100 },
        { id: 2, type: '17-inch pair radial black', price: 200 },
        { id: 3, type: '18-inch pair spoke silver', price: 300 },
        { id: 4, type: '18-inch pair spoke black', price: 400 }
    ],
    customOrders: [
        {
            id: 1,
            paintsId: 2,
            interiorsId: 2,
            technologyId: 2,
            wheelsId: 2,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {
        paintsId: '',
        interiorsId: '',
        technologyId: '',
        wheelsId: ''
    }
}

export const getPaints = () => {
    return database.paints.map(paint => ({ ...paint }))
}
export const getInterior = () => {
    return database.interiors.map(interior => ({ ...interior }))
}
export const gettechnology = () => {
    return database.technology.map(type => ({ ...type }))
}
export const getwheels = () => {
    return database.wheels.map(type => ({ ...type }))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}


export const setPaints = (id) => {
    database.orderBuilder.paintsId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorsId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


