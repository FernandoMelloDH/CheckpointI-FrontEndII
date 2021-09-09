//Função para a criação de cards
let elements = 0
let urlImg = ""
let title = ""
let description = ""
let json = {
    'id': [],
    'imagem': [],
    'titulo': [],
    'descricao': []
}

function createCard() {
    title = document.getElementById("title").value
    description = document.getElementById("description").value
    urlImg = document.getElementById("url_img").value


    let cardSection = document.getElementById("card");
    cardSection.innerHTML += `<div> <img src="${urlImg}">
                                    <h2>${title}</h2>
                                    <p>${description}<p> </div>`;

    //let json = `{"imagem":"${urlImg}", "titulo":"${title}"}`

    //arrObj.push(urlImg)
    //arrObj.push(title)
    json.imagem.push(urlImg)
    json.titulo.push(title)
    json.descricao.push(description)
    console.log(json)

    //localStorage.setItem('imagem', urlImg)
    //localStorage.setItem('titulo', title)

    json = JSON.stringify(json) //Convertendo em JSON
    console.log(json)
    localStorage.setItem('json', json)
    json = JSON.parse(json)
}

window.onload = function() {
    //let imagem = localStorage.getItem('imagem')
    //let titulo = localStorage.getItem('titulo')

    let obj = localStorage.getItem('json')
    obj = JSON.parse(obj)
    console.log(obj)
        //console.log(arr)

    for (elements in obj.imagem) {
        let cardSection = document.getElementById("card");
        cardSection.innerHTML += `<div> <img src="${obj.imagem[elements]}"> 
                                            <h2>${obj.titulo[elements]}</h2></div>`;

        json.imagem.push(obj.imagem[elements])
        json.titulo.push(obj.titulo[elements])
    }
}