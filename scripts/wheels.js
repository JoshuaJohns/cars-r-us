import { getwheels, setWheels } from "./database.js";

const wheels = getwheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = `<select id="wheels">
    <option value="0">Select Wheels...</option>`

    for (const wheel of wheels) {
        html +=
            ` <option value="${wheel.id}">${wheel.type}</option> `
    }
    html += '</select>'
    return html
}