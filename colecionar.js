document.querySelector(".remover-vildred").addEventListener("click", () => {
    document.querySelector(".Vildred").classList.add("hide")
    document.querySelector(".Vildred2").classList.remove("hide")
})

document.querySelector(".remover-diene").addEventListener("click", () => {
    document.querySelector(".Diene").classList.add("hide")
    document.querySelector(".Diene2").classList.remove("hide")
})

document.querySelector(".remover-ras").addEventListener("click", () => {
    document.querySelector(".Ras").classList.add("hide")
    document.querySelector(".Ras2").classList.remove("hide")
})

document.querySelector(".remover-straze").addEventListener("click", () => {
    document.querySelector(".Straze").classList.add("hide")
    document.querySelector(".Straze2").classList.remove("hide")
})


document.querySelector(".add-straze").addEventListener("click", () => { 
    document.querySelector(".Straze2").classList.add("hide")
    document.querySelector(".Straze").classList.remove("hide")
})

document.querySelector(".add-vildred").addEventListener("click", () => {
    document.querySelector(".Vildred2").classList.add("hide")
    document.querySelector(".Vildred").classList.remove("hide")
})

document.querySelector(".add-diene").addEventListener("click", () => {
    document.querySelector(".Diene2").classList.add("hide")
    document.querySelector(".Diene").classList.remove("hide")
})

document.querySelector(".add-ras").addEventListener("click", () => {
    document.querySelector(".Ras2").classList.add("hide")
    document.querySelector(".Ras").classList.remove("hide")
})