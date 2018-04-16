function setLocal(localName){
    var newName = localName;

    localStorage.setItem("name", newName);
}

function submitName(text){

    var newName = text;

    setLocal(newName);
}

function buildList(){
    var noteList = getLocal();
}

function submitNameEvent(event) {
    var nameText = document.querySelector("#name");

    submitName(nameText.value);
}


var submitNoteBtn = document.querySelector("#login");
submitNameBtn.addEventListener("click", submitNameEvent);
