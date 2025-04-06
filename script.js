let select=document.querySelector(".methods")


let form=document.querySelector("form")


let ADD=document.querySelector(".ADD")


let num=document.querySelector(".number-input")

let Status=document.querySelector(".Status")


let table_body =document.querySelector(".table-body")

let Total=document.querySelector(".Total")
console.log(Total)




ADD.addEventListener("click",()=>{

 let select_input=select.value
 let Status_input=Status.value
 let num_input=num.value

 console.log(select_input)
 console.log(Status_input)
 console.log(num_input)


addElement(Status.value,select_input,num_input)

reslult(num_input)
console.log(arr)


})
let arr=[]

function reslult(d){
    arr.push(d)
  let re=  arr.reduce((f,l)=>{  return parseInt(f)+parseInt(l) })
  console.log(`add ${re}`)

  Total.textContent=`totsl is ${re}`
}



function addElement(status,select,amount){
    let div=document.createElement("tr")

    table_body.appendChild(div)

    //ranodm id

    let id=document.createElement("tr")
    let ran=Math.floor(Math.random()*100)
    let idtext=document.createTextNode(ran)
    id.appendChild(idtext)
    div.appendChild(id)


    //satus
    let AddStatus=document.createElement("td")
    let AddStatus_text=document.createTextNode(status)
    AddStatus.appendChild(AddStatus_text)


    div.appendChild(AddStatus)


    //methods
    let selectElement=document.createElement("td")
    let select_text=document.createTextNode(select)
    selectElement.appendChild(select_text)

    div.appendChild(selectElement)


    //amount

    let amount_input=document.createElement("tr")
    let amount_text=document.createTextNode(amount)
    amount_input.appendChild(amount_text)
    div.appendChild(amount_input)

}





