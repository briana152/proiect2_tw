const re = /^[a-zA-Z]+ *-*'*[a-zA-Z]+$|^[a-zA-Z]+$|^[a-zA-Z]+'*$/

let strawberryCount
let body = document.getElementsByTagName('body')[0]
    body.addEventListener('keydown', Darkmode)
    body.addEventListener('click', Strawberry)

window.addEventListener('load', (event) =>{

    testLog()
    strawberryCount = 0

    let buttonClear = document.getElementsByClassName('btn-clear')[0]
    buttonClear.addEventListener('click', showClear)

    let buttonYES = document.getElementsByClassName("btn-for-yes")[0]
    buttonYES.addEventListener('click', YESclear)

    let buttonNO = document.getElementsByClassName("btn-for-no")[0]
    buttonNO.addEventListener('click', exitFunc)

    let form = document.getElementsByTagName('form')[0]
    form.addEventListener('submit', verifyInput)


});


function Darkmode(event){
    if(event.key == 1){
        body.classList.toggle('darkmode')
    }
}

function Strawberry(event){
    const interval = setInterval(()=>{
        if(strawberryCount < 10)
        {
            strawberryCount+=1
            let strawberry = document.createElement("div")
            strawberry.className = "strawberry"
            strawberry.innerText = "🍓"
            strawberry.style.width = "15px"
            strawberry.style.height = "15px"
            strawberry.style.position = "absolute"
            strawberry.style.left = (Math.random() * (1000 - 10) + 10)+"px"
            strawberry.style.top = (Math.random() * (1000 - 10) + 10)+"px"
            body.append(strawberry)
        }
        else{clearInterval(interval)}
    },2000);

}

function removeStrawberries(event){
    let strawberries = document.getElementsByClassName("strawberry")

    for(i=0; i<strawberries.length; i++){
        strawberries[i].remove()
    }

}

function exitFunc(event){
    event.stopPropagation();
    event.target.parentElement.style.display = "none"
        
}

function verifyInput(event){
    event.stopPropagation();

    let LogInputs = document.getElementsByClassName('LoginData')

    let verificare = LogInputs[0].value+LogInputs[1].value
    let ok = re.exec(verificare)
    if(!ok){
        alert(`${verificare} is not a name, please try again`)
        event.preventDefault()
    }else{
        for(i = 0; i < LogInputs.length; i++){
            localStorage.setItem(LogInputs[i].getAttribute("name"), LogInputs[i].value)
        }
        localStorage.setItem("auth", "yes")
        alert(`You have successfully logged in!`) 
    }
}

function testLog(){
    if(localStorage.getItem('auth')){
        let div = document.getElementsByClassName('page-title-div')[0]
        let message = document.createElement('h4')
        message.innerText =`Welcome ${localStorage.getItem('username')}`
        message.classList.add('page-message')
        div.append(message)
        let link1 = document.getElementsByClassName('products-page')[0]
        link1.style.display = 'block'
        let link2 = document.getElementsByClassName('suggestions-page')[0]
        link2.style.display = 'block'
    }
    else{
        document.getElementsByClassName('LogIn-container')[0].style.display='flex'
    }
}

function showClear(event){
    event.stopPropagation();
    document.getElementsByClassName("after-container")[0].style.display = "block";
}

function YESclear(event){
    event.stopPropagation();
    setTimeout(() => {
        document.getElementsByClassName("after-container")[0].style.display = "none"

    }, 2000);
    setTimeout(() => {
        alert("Please refresh your page")

    }, 3000);
    localStorage.clear()
}
localStorage.setItem("department", "manga site")
