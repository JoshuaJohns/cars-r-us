import { htmlRepersentation } from "./htmlRep.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = htmlRepersentation()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})