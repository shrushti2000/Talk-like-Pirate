var btntranslate=document.querySelector('#btn-translate');
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

outputDiv.innerText=""

var serverURL="https://api.funtranslations.com/translate/pirate.json"

function getTranslation(text){
    return serverURL +"?" +"text=" +text
}

function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server")
}

function clickEventHandler(){
    var inputText=txtInput.value;
    fetch(getTranslation(inputText))
    .then(response=>response.json())
    .then(json=>{
        outputDiv.innerText=json.contents.translated;
    })
    .catch(errorHandler)
}
btntranslate.addEventListener("click",clickEventHandler);


