const cancelPop = document.getElementById("cancel-pop")
const popupDiv = document.getElementById("popup-div")

cancelPop.addEventListener('click',() => {
    popupDiv.style.display = "none"
})