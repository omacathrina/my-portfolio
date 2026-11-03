const cancelPop = document.getElementById("cancel-pop")
const popupDiv = document.getElementById("popup-div")

cancelPop.addEventListener('click',() => {
    popupDiv.style.display = "none"
})


const clickSound = new Audio("audio/mikeaveloo-soft_pop-538611.mp3")

let unlocked = false

document.addEventListener("click", () => {
    if (!unlocked) {
        clickSound.play().then(() => {
            clickSound.pause()
            clickSound.currentTime = 0
            unlocked = true
        }) 
    }

    clickSound.currentTime = 0
    clickSound.play().catch(() => {})
})


// let soundElements = document.querySelectorAll("a, button, [data-click-sound]")

// soundElements.forEach((soundElement) => {
//     soundElement.addEventListener("click", () => {
//         clickSound.currentTime = 0
//         clickSound.play()
//     })
// })


const nftModal = document.getElementById("nft-dashboard-modal")
const exitNftModal = document.getElementById("modal-exit")
const onlineFoodMOdalLink = document.getElementById("online-food-link")

exitNftModal.addEventListener("click", () => {
    nftModal.style.display = "none"
})

onlineFoodMOdalLink.addEventListener("click", () => {
    nftModal.style.display = "block"
})