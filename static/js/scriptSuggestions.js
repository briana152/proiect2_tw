function Retrimite(param){
    window.location.href = "http://127.0.0.1:3000/"+param
}

function ShowSuggestions(){
    fetch("http://127.0.0.1:3000/mangas")
    .then((response)=>response.json())
    .then(function(response){
        let container = document.getElementById("suggestions-container")
        let titlu = document.createElement("h1")
        titlu.innerText = "All of the suggestions submitted:"
        container.append(titlu)
        let suggestions = response
        let lungime = JSON.stringify(suggestions).split("}").length-1
        for(let i=0; i<lungime; i++){
            let nameParagraf = document.createElement("p")
            nameParagraf.innerText = (i+1)+". Manga name: "
            container.append(nameParagraf)
            container.append(JSON.stringify(suggestions[i].suggestionName))
            container.append(document.createElement('br'))

            let volParagraf = document.createElement("p")
            volParagraf.innerText = "the volume: "
            container.append(volParagraf)
            container.append(JSON.stringify(suggestions[i].suggestionVolume))
            container.append(document.createElement('br'))

            let genreParagraf = document.createElement("p")
            genreParagraf.innerText = "the genre: "
            container.append(genreParagraf)
            container.append(JSON.stringify(suggestions[i].suggestionGenre))
            container.append(document.createElement('br'))

        }
    })
}


let newManga = {"suggestionName":"","suggestionVolume":"","suggestionGenre":""}
function UpdateManga(){
    let inputs = document.querySelectorAll('input')
    for(let i=0; i<inputs.length; i++){
        let key = inputs[i].getAttribute("name")
        if(key!="indexUpdate"){
            newManga[key] = inputs[i].value
        }
    }
    let indexUpdate = document.getElementById("indexUpdate").value
    let forUpdate = JSON.stringify({"indexUpdate": indexUpdate, "newManga":newManga})
    let settings={method:"PATCH",headers:{"Content-Type":"application/json"},body:forUpdate}
    fetch("http://127.0.0.1:3000/update",settings)

}

function DeleteManga(){
    let indexDelete = document.getElementById("indexDelete").value
    let forDelete = JSON.stringify({"indexDelete": indexDelete})
    let settings={method:"DELETE",headers:{"Content-Type":"application/json"},body:forDelete}
    fetch("http://127.0.0.1:3000/delete",settings)
}