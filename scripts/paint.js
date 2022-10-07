import { getPaints, setPaints } from "./database.js";

const paints = getPaints()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "color") {
            setPaints(parseInt(event.target.value))
        }
    }
)

export const selectPaint = () => {
    let html = `<select id="color">
    <option value="0">Select Paint...</option>`

    for (const paint of paints) {
        html +=
            ` <option value="${paint.id}">${paint.color}</option> `
    }
    html += '</select>'
    return html
}


