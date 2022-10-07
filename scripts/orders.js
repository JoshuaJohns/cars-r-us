import { getOrders, getPaints, getInterior, gettechnology, getwheels } from "./database.js"
const paints = getPaints()
const interiors = getInterior()
const technologys = gettechnology()
const wheels = getwheels()

// Remember that the function you pass to find() must return true/false


const buildOrderListItem = (order) => {

    const paintCost = paints.find(
        (paint) => {
            return paint.id === order.paintsId
        }
    )
    const interiorCost = interiors.find(
        (interior) => {
            return interior.id === order.interiorsId
        }
    )
    const wheelsCost = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )
    const techCost = technologys.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )

    const totalCost = paintCost.price + interiorCost.price + wheelsCost.price + techCost.price
    // const costString = totalCost.toLocaleString("en-US", {
    //     style: "currency",
    //     currency: "USD"
    // })
    return `<li>
        Order #${order.id} was placed on ${order.timestamp} 
        with a total of ${totalCost}
        </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

