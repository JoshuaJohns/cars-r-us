import { getInterior, setInterior } from "./database.js"

const interiors = getInterior()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "interior") {
//             // window.alert(`User chose interior ${event.target.value}`)
//             setInterior(parseInt(event.target.value))
//         }
//     }
// )

// export const Interior = () => {
//     let html = "<ul>"

//     // This is how you have been converting objects to <li> elements
//     for (const interior of interiors) {
//         html += `<li>
//         <input type="radio" name="interior" value="${interior.id}" /> ${interior.interior}
//         </li>`
//     }

//     html += "</ul>"
//     return html
// }

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "package") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interior = () => {
    let html = `<select id="package">
    <option value="0">Select Interior...</option>`

    for (const interior of interiors) {
        html +=
            ` <option value="${interior.id}">${interior.interior}</option> `
    }
    html += '</select>'
    return html
}

