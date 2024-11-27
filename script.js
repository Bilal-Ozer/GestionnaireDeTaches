
// const constinput=document.getElementById("submitted-name");
// const constul=document.getElementById("listeDeTaches");
// console.log(constinput);
const Form=document.getElementById("form");


Form.addEventListener("submit", function (event) {
    event.preventDefault();
    let input=document.getElementById("submitted-name");
    let inputValue= input.value;
    let li =document.createElement("li");
    li.textContent=inputValue;
    let ul=document.getElementById("listeDeTaches");
  


    let button =document.createElement("button");
    button.textContent="Supprimer";
    button.addEventListener("click",function name() {
        ul.removeChild(li);
    })
    ul.appendChild(li);
    li.appendChild(button);




    let buttons =document.createElement("button");
      
    }
    
);

