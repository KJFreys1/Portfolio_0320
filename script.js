const modalOne = document.querySelector(".modal-one")
const modalTwo = document.querySelector(".modal-two")
const modalThree = document.querySelector(".modal-three")
const closeOne = document.querySelector(".c_one")
const closeTwo = document.querySelector(".c_two")
const closeThree = document.querySelector(".c_three")

closeOne.addEventListener("click", () => {
    modalOne.style.display = "none"
})

closeTwo.addEventListener("click", () => {
    modalTwo.style.display = "none"
})

closeThree.addEventListener("click", () => {
    modalThree.style.display = "none"
})

const devTickets = document.querySelector("#DevTickets")
const devSync = document.querySelector("#DevSync")
const thoughtShower = document.querySelector("#Thought-Shower")

devTickets.addEventListener("click", () => {
    modalOne.style.display = "block"
})

devSync.addEventListener("click", () => {
    modalTwo.style.display = "block"
})

thoughtShower.addEventListener("click", () => {
    modalThree.style.display = "block"
})

const nav = document.querySelector(".nav-list-container")
nav.style.display = "flex"

function showNav() {
    if (nav.style.display == "none") {
        nav.style.display = "flex"
    } else {
        nav.style.display = "none"
    }
}