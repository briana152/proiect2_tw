const d = new Date()
let month = d.getMonth()

let titlu = document.getElementsByClassName("title")[0]
    titlu.innerText = `Products in stock month(${month})`

let logoImg = document.getElementsByClassName("logo")[0]
    logoImg.addEventListener("click", changeSize)

let employee = {
    "fullname":"",
    "username":"",
    "workID":"",
    "department":"manga site",
    "admin":true
}

let clickCount
let temparr = []
    temparr.push(localStorage.getItem("firstName"))
    temparr.push(localStorage.getItem("lastName"))
    temparr.reverse()
    let tempstring = temparr.join().replace(","," ")
    employee.fullname = tempstring
    employee.username = localStorage.getItem("username")
    employee.workID = localStorage.getItem("workID")
    localStorage.setItem("fullName", tempstring)

window.addEventListener('load', (event) =>{
    clickCount = 0

    let buttonAbout = document.getElementsByClassName("btn-about")[0]
    buttonAbout.addEventListener('click', AboutEmployee)
    

});


function AboutEmployee(){
    let divAbout = document.getElementById("divAbout")
    divAbout.style.display = "block"
    let fullname = employee.fullname
    divAbout.innerHTML = `<h2>Employee info</h2>\n<p>Full name: ${fullname.toUpperCase()}</p>\n<p>Username: ${employee.username}</p>\n<p>Work ID: ${employee.workID}</p>\n<p>Department: ${employee.department}</p>\n<p>Admin: ${employee.admin}</p>\n<button onclick = " RemoveDepartment()">REMOVE DEPARTMENT</button>\n<button onclick = "Hide()">HIDE INFO</button>`
}

function RemoveDepartment(){
    localStorage.removeItem("department")
}

function Hide(){
    let divAbout = document.getElementById("divAbout")
    divAbout.style.display = "none"
}

function changeSize(event){
    clickCount+=1
    let logoImg = document.getElementsByClassName("logo")[0]
    let compStyles = getComputedStyle(logoImg)
    if(clickCount % 2 == 0){
        let newWidth = parseFloat(compStyles.getPropertyValue('width'))*2
        let newHeight = parseFloat(compStyles.getPropertyValue('height'))*2
        logoImg.style.width = newWidth + "px"
        logoImg.style.height = newHeight + "px"
    }else if(clickCount % 2 == 1){
        let newWidth = parseFloat(compStyles.getPropertyValue('width'))/2
        let newHeight = parseFloat(compStyles.getPropertyValue('height'))/2
        logoImg.style.width = newWidth + "px"
        logoImg.style.height = newHeight + "px"
    }

}

document.getElementsByClassName('home-page')[0].style.display = 'block'

