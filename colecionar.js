let herois_obtidos = []
let herois_nao_obtidos = []


window.addEventListener("load", () => {
    herois_nao_obtidos = JSON.parse(localStorage.getItem("herois_nao_obtidos")) || [
        {id: 0, nome: "Straze", img: "./assets/images/strazeicon.png", disabled: true},
        {id: 1, nome: "Vildred", img: "./assets/images/vildredicon.png", disabled: true},
        {id: 2, nome: "Diene", img: "./assets/images/dieneicon.png", disabled: true},
        {id: 3, nome: "Ras", img: "./assets/images/rasicon.png", disabled: true},
        {id: 4, nome: "Angelica", img: "./assets/images/angelicaicon.png", disabled: true},
        {id: 5, nome: "Sez", img: "./assets/images/sezicon.png", disabled: true},
        {id: 6, nome: "Yuna", img: "./assets/images/yunaicon.png", disabled: true},
        {id: 7, nome: "Iseria", img: "./assets/images/iseriaicon.png", disabled: true},
        {id: 8, nome: "Krau", img: "./assets/images/krauicon.png", disabled: true},
        {id: 9, nome: "Ludwig", img: "./assets/images/ludwigicon.png", disabled: true},
        {id: 10, nome: "Destina", img: "./assets/images/destinaicon.png", disabled: true},
        {id: 11, nome: "Kayron", img: "./assets/images/kayronicon.png", disabled: true},
        {id: 12, nome: "Tenebria", img: "./assets/images/tenebriaicon.png", disabled: true},
        {id: 13, nome: "Tamarinne", img: "./assets/images/tamarinneicon.png", disabled: true},
        {id: 14, nome: "Luluca", img: "./assets/images/lulucaicon.png", disabled: true},
        {id: 15, nome: "Roana", img: "./assets/images/roanaicon.jpg", disabled: true},
        {id: 16, nome: "Archdemon Mercedes", img: "./assets/images/archdemonmercedesicon.jpg", disabled: true},
        {id: 17, nome: "Cermia", img: "./assets/images/cermiaicon.png", disabled: true},
        {id: 18, nome: "Mercedes", img: "./assets/images/mercedesicon.jpg", disabled: true},
        {id: 19, nome: "Lorina", img: "./assets/images/lorinaicon.png", disabled: true},
        {id: 20, nome: "Achates", img: "./assets/images/achatesicon.jpg", disabled: true},
        {id: 21, nome: "Clarissa", img: "./assets/images/clarissaicon.png", disabled: true},
        {id: 22, nome: "Montmorancy", img: "./assets/images/montmorancyicon.jpg", disabled: true},
        {id: 23, nome: "Corvus", img: "./assets/images/corvusicon.png", disabled: true},
        {id: 24, nome: "Jena", img: "./assets/images/jenaicon.png", disabled: true},
        {id: 25, nome: "Hazel", img: "./assets/images/hazelicon.png", disabled: true},
        {id: 26, nome: "Karin", img: "./assets/images/karinicon.jpg", disabled: true},
        {id: 27, nome: "Judith", img: "./assets/images/judithicon.png", disabled: true},
        {id: 28, nome: "Rikoris", img: "./assets/images/rikorisicon.png", disabled: true},
        {id: 29, nome: "Zerato", img: "./assets/images/zeratoicon.png", disabled: true},
        {id: 30, nome: "Schuri", img: "./assets/images/schuriicon.jpg", disabled: true},
        {id: 31, nome: "Serila", img: "./assets/images/serilaicon.jpg", disabled: true},
        {id: 32, nome: "Carrot", img: "./assets/images/carroticon.jpg", disabled: true},
        {id: 33, nome: "Basar", img: "./assets/images/basaricon.png", disabled: true},
        {id: 34, nome: "Kluri", img: "./assets/images/kluriicon.jpg", disabled: true},
        {id: 35, nome: "Tieria", img: "./assets/images/tieriaicon.jpg", disabled: true},
        {id: 36, nome: "Charlotte", img: "./assets/images/charlotteicon.png", disabled: true},
        {id: 37, nome: "Silk", img: "./assets/images/silkicon.jpg", disabled: true},
        {id: 38, nome: "Zahhak", img: "./assets/images/zahhakicon.png", disabled: true},
        {id: 39, nome: "Sigret", img: "./assets/images/sigreticon.png", disabled: true},
        {id: 40, nome: "Ravi", img: "./assets/images/raviicon.png", disabled: true},
        {id: 41, nome: "Cidd", img: "./assets/images/ciddicon.png", disabled: true},
        {id: 42, nome: "Kise", img: "./assets/images/kiseicon.png", disabled: true},
        {id: 43, nome: "Yufine", img: "./assets/images/yufineicon.png", disabled: true},
        {id: 44, nome: "Ran", img: "./assets/images/ranicon.png", disabled: true},
        {id: 45, nome: "Peira", img: "./assets/images/peiraicon.png", disabled: true},
        {id: 46, nome: "Laika", img: "./assets/images/laikaicon.png", disabled: true},
        {id: 47, nome: "Celine", img: "./assets/images/celineicon.jpg", disabled: true},
        {id: 48, nome: "Landy", img: "./assets/images/landyicon.png", disabled: true},
        {id: 49, nome: "Politis", img: "./assets/images/politisicon.png", disabled: true},
        {id: 50, nome: "Pavel", img: "./assets/images/pavelicon.jpg", disabled: true}

    ]
    herois_obtidos = JSON.parse(localStorage.getItem("herois_obtidos")) || []
    atualizar()
})

document.querySelector("#busca").addEventListener("keyup", ()=> {
    let busca = document.querySelector("#busca").value
    let heroisnaoobtidosFiltrados = herois_nao_obtidos.filter((heroi)=>{
        return heroi.nome.toLowerCase().includes(busca.toLowerCase())

    })
    let heroisobetidosFiltrados = herois_obtidos.filter((heroi)=>{
        return heroi.nome.toLowerCase().includes(busca.toLowerCase())

    })
    filtrar(heroisnaoobtidosFiltrados,heroisobetidosFiltrados)
})

function filtrar(herois_nao_obtidos,herois_obtidos){
    document.querySelector("#nao-obtidos").innerHTML = ""
    document.querySelector("#obtidos").innerHTML = ""  
    herois_nao_obtidos.forEach((heroi) =>{
        document.querySelector("#nao-obtidos").innerHTML 
                    += createCard(heroi)
    })
    herois_obtidos.forEach((heroi) =>{
        document.querySelector("#obtidos").innerHTML 
                    += createCard(heroi)
    })
}

function atualizar(){
    document.querySelector("#nao-obtidos").innerHTML = ""
    document.querySelector("#obtidos").innerHTML = ""
    localStorage.setItem("herois_nao_obtidos", JSON.stringify(herois_nao_obtidos))
    localStorage.setItem("herois_obtidos", JSON.stringify(herois_obtidos))
    herois_nao_obtidos.forEach((heroi) =>{
        document.querySelector("#nao-obtidos").innerHTML 
                    += createCard(heroi)
    })
    herois_obtidos.forEach((heroi) =>{
        document.querySelector("#obtidos").innerHTML 
                    += createCard(heroi)
    })
}


function apagar(id){

    let heroi = herois_obtidos.filter((heroi) => {
        return heroi.id == id
    })
    herois_obtidos = herois_obtidos.filter((heroi) => {
        return heroi.id != id
    })
    herois_nao_obtidos.push(heroi[0])
    heroi[0].disabled = true
    atualizar()
 
}
function adicionar(id) {
    let heroi = herois_nao_obtidos.filter((heroi) => {
        return heroi.id == id
    })
    herois_nao_obtidos = herois_nao_obtidos.filter((heroi) => {
        return heroi.id != id
    })
    herois_obtidos.push(heroi[0])
    heroi[0].disabled = false
    atualizar()
}




function createCard(heroi){
    return `
    <div id="${heroi.nome}" class="col-lg-3 col-md-6 col-12">

        <div class="card" style="width: 18rem;">
          <img src="${heroi.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${heroi.nome}</h5>
            <p class="card-text"></p>
            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
              </p>
              <a onClick="adicionar(${heroi.id})" href="#" class="btn btn-success add-straze add-straze ${heroi.disabled ? "" : "disabled"}" title="marcar como obtido">
                <i class="bi bi-check-lg"></i>
              </a>
              <a onClick="apagar(${heroi.id})" href="#" class="btn btn-danger remover-straze ${heroi.disabled ? "disabled" : ""}" title="apagar dos obtidos">
                <i class="bi bi-trash"></i>
              </a>
            </div>
          </div>
        </div>
    </div>
    `
}