const illustartion = document.getElementById("illustration")

const changeSrc = (mobile = false) => illustartion.src = `assets/images/illustration-sign-up-${mobile ? "mobile" : "desktop"}.svg`

if(window.innerWidth > 640){
    changeSrc()
}

window.addEventListener("resize", (e) => {
    if(window.innerWidth > 640){
        changeSrc()
    }else{
        changeSrc(true)
    }
})

const form = document.getElementById("form")
const textEmail = document.getElementById("contentEmail")
const firstStage = document.getElementById("first-stage")
const secondStage = document.getElementById("confirmation")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const userEmail = e.target.elements.email.value
    textEmail.innerHTML = `A confirmation email has been sent to
    ${userEmail}. Please open it and click the button inside to confirm
    your subscription.`
    firstStage.classList.add("hidden")
    firstStage.classList.add("sm:hidden")

    secondStage.classList.remove("hidden")
})

document.getElementById("back").addEventListener("click", (e) => {
    firstStage.classList.remove("hidden")
    firstStage.classList.remove("sm:hidden")

    secondStage.classList.add("hidden")
})