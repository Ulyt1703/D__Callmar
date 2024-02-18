let seacrhInput = document.querySelector(".Search-home")
let seacrhButton = document.querySelector(".magnifier-home")

let blockOne = document.getElementById("BlockOne").outerHTML
let blockTwo = document.getElementById("BlockTwo").outerHTML
let blockThree = document.getElementById("BlockThree").outerHTML
let blockFour = document.getElementById("BlockFour").outerHTML
let blockFive = document.getElementById("BlockFive").outerHTML


let blockOneTxT = "Informatie block"
let blockTwoTxT = "Cards"
let blockThreeTxT = "Home page"
let blockFourTxT = "Footer"
let blockFiveTxT = "Video"

let searchArray = [blockOneTxT, blockTwoTxT, blockThreeTxT, blockFourTxT, blockFiveTxT]

seacrhButton.addEventListener("click", function(){

    let seacrhInputValue = seacrhInput.value
    for(let word of searchArray){
        if(word === seacrhInputValue){
            switch(seacrhInputValue){
                case "Informatie block":
                    sessionStorage.setItem("Result", blockOne)
                    break;
                case "Cards":
                    sessionStorage.setItem("Result", blockTwo)
                    break;
                case "Home page":
                    sessionStorage.setItem("Result", blockThree)
                    break;
                case "Footer":
                    sessionStorage.setItem("Result", blockFour)
                    break;
                case "Video":
                    sessionStorage.setItem("Result", blockFive)
                    break;
            }
            window.location.href = "./search.html"
            return
        }
    }
    alert("Please enter correct data!")
})