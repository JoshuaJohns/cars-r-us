import { selectPaint } from "./paint.js"
import { Orders } from "./orders.js"
import { Interior } from "./interior.js"
import { Wheels } from "./wheels.js"
import { Technology } from "./technology.js"
import { addCustomOrder } from "./database.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)





export const htmlRepersentation = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint</h2>
               ${selectPaint()}
              
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${Interior()}
               
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                    ${Wheels()}
                
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                    ${Technology()}
            </section>
        </article>

        <article class ="button">
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders;</h2>
                ${Orders()}
        </article>
    `
}
