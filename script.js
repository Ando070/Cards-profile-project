// let userName = 'Ando';
// function showMessage(){
//   let message = 'Hello, ' + userName;
//   alert(message);
// }
// showMessage();

// function showMessage (from,text) {
//   alert (from + ': ' + text)
// }
// showMessage( 'Ando','Hello!');
// showMessage('Ando','How are you?');

// function showMessage() {
//  let message = "Hello, I JavaScript!";
// alert(message);
// }
// showMessage(); 

// function showMessage(text) {
//   if (text === undefined) {
//     text = "empty message"
//   }
//   alert(text);
// }
// showMessage();

// function sum(a , b) {
//   return a + b;
// }
// let result = sum(5 , 7);
// alert( result );

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('А родители разрешили?');
//   }
// }
// let age = prompt('Сколько вам лет?', 18);
// if ( checkAge(age)) {
//   alert( 'Доступ получен' );
// } else {
//   alert( 'Доступ закрыт' );
// }

// function fibonacci(n) {
//   if ( n < 2 ) {
//     return 1;
//   }else {
//     return fibonacci( n-2 ) + fibonacci( n-1 );
//   }
// }
// console.log(fibonacci(7));


// let demo = document.getElementById("demo")
// demo.innerText = demo.innerText+"hello"


// let user = ["Ando"]

// function saveInputValue() {
//  let getInputValue = document.getElementById("myInput").value
//  document.getElementById("demo").textContent = getInputValue
// user.unshift("Karen")
// console.log(user);
// let text = document.createElement("p")
// document.getElementById("demo").appendChild(text)
// }

// function deleteInputValue() {
  
// }



// let removed = user.splice()
// console.log(removed);
// let val = document.querySelector("input").value

// orinak 1 
// let toDo = []

// let toDoList = document.querySelector(".toDoList")
// let addToDo = document.querySelector("#addToDo")
// let input = document.querySelector("#input")

// addToDo.onclick = () => {
//   let newToDo = { title: input.value }
//   toDo.unshift(newToDo)
//   toDoFunction()
//   input.value = ""
// }

// function toDoFunction() {
//   toDoList.replaceChildren()
//     toDo.forEach( item => {
//       let div = document.createElement("div")
//       let span = document.createElement("span")
//       let button = document.createElement("button")
//       div.appendChild(span)
//       div.appendChild(button)
//       toDoList.appendChild(div)
//       span.textContent = item.title
//       button.textContent = "Delete"
//       button.onclick = () => toDoDelete(item);
//     } )
//     if (toDo.length === 8) {
//      toDoDelete( toDo[toDo.length -1] )
    
// }

//  }
//  function toDoDelete(element) {
//    toDo=toDo.filter(item => item !== element)
//    toDoFunction()
//  }


// orinak 2 

// let toDo = []

// let toDoList = document.querySelector(".toDoList")
// let addToDo = document.querySelector("#addToDo")
// let input = document.querySelector("#input")

// addToDo.onclick = () => {
//   let newToDo = { title: input.value }
//   toDo.unshift(newToDo)
//   toDoFunction()
//   input.value = ""
// }

// function toDoFunction() {
//   toDoList.replaceChildren()
//     toDo.forEach( item => {
//       let div = document.createElement("div")
//       let span = document.createElement("span")
//       let button = document.createElement("button")
//       div.appendChild(span)
//       div.appendChild(button)
//       toDoList.appendChild(div)
//       span.textContent = item.title
//       button.textContent = "Delete"
//       button.onclick = () => toDoDelete(item);
//     } )
//     if (toDo.length === 8) {
//      toDoDelete( toDo[toDo.length -1] )
    
// }

//  }
//  function toDoDelete(element) {
//    toDo=toDo.filter(item => item !== element)
//    toDoFunction()
//  }


let numList = document.querySelector(".numList")
let input = document.querySelector("#input")
let addNumber = document.querySelector("#addNumber")

let idList = []

function addBtn() {
  let id = generateId()
  createElement(id,input.value)
  console.log(idList);
  
}


async function makeRequestToGetUser() {
  return await fetch ('https://random-data-api.com/api/v2/users?size=8', {
    method: 'GET',
    headers: {'content-type':'application/json'},
    // body: JSON.stringify(user)
  })
  // return user[0]
}


 async function requestBtn() {
  //  openUserInfo()
 let user = 7
  await makeRequestToGetUser()
 .then(item => item.json())
 .then(item => user = item)
 .catch( error => console.log("chi ashxatum xndir ka" + error));
 console.log(user);
 for (let i = 0; i < user.length; i++) {
   createElement(user[i].id,user[i].first_name, user[i])
   console.log(i);
  }
  
}




function createElement( id , text,  user ) { 
    let div = document.createElement("div")
    let image =  document.createElement("img")
    let span = document.createElement("span")
    let last_name = document.createElement("p") 
    let email = document.createElement("p1")
    div.addEventListener('click' , function onclick(){
      openUserInfo(user)
      console.log(user);
    })
    numList.insertBefore(div,numList.firstChild);
    idList.push(id)
    div.id = id
    div.appendChild(image)
    div.appendChild(span)
    div.appendChild(last_name)
    div.appendChild(email)
    image.src = user.avatar
        span.textContent = text
        last_name.textContent = user.last_name
        email.textContent = user.email
  }


let addingId = 0
function generateId() {
  addingId += 1
  let searchId = "id_x"
  let changeId_x = searchId.replace(/x/,addingId)
  console.log(changeId_x);
  return changeId_x
  
}

async function openUserInfo(user) {
  // document.getElementById("text")
  localStorage.setItem("user_info", JSON.stringify(user));
  window.location.href = "http://127.0.0.1:5500/JS/profile cards/page.html"
}


function deleteBtn() {
  let id = idList.pop()
  let div = document.getElementById(id);
  numList.removeChild(div)
  console.log(id);
}























// let text = "hello_x_545"
// let textToBeSet = text.replace(/x/,'123');
// console.log(textToBeSet)




  // let text = "Hello";
  // let text2 = "Android";
  // let i = 0;
  // while (i < 10){
  //   let v = text + i + text2
  //   i++
  //   console.log(v)
  // }



//   let text = "hello_----x_545"
// let textToBeSet = "123"
// let xPosition2 = text.indexOf("x")
// // let numberPosition = text.indexOf("_545")
// // console.log(xPosition)
// // console.log(numberPosition)
// let helloPosition = text.substring(0,6)
// let xPosition = text.substring(6,7)
// let numberPosition = text.substring(7,11)
// let result = helloPosition + textToBeSet + numberPosition
// console.log(xPosition2)
// console.log(helloPosition)
// console.log(xPosition)
// console.log(numberPosition)
// console.log(result)
// console.log(`${text + xPosition}`)




