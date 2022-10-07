import { gettechnology, setTechnology } from "./database.js";

const technologys = gettechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technologys") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technology = () => {
    let html = `<select id="technologys">
    <option value="0">Select Technology...</option>`

    for (const tech of technologys) {
        html +=
            ` <option value="${tech.id}">${tech.pack}</option> `
    }
    html += '</select>'
    return html
}