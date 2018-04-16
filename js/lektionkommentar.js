function setLocal(localForumposts){
    var jsonData = JSON.stringify(localForumposts);

    localStorage.setItem("lektionkommentar", jsonData);
}

function getLocal(){
    var lektionkommentar = localStorage.getItem("lektionkommentar");
    if(lektionkommentar == null){
        return [];
    }else{
        return JSON.parse(lektionkommentar);
    }
}

function submitNote(text){
    var origPosts = getLocal();

    var newComment = {
        text:       text
    };

    origPosts.push(newComment);

    setLocal(origPosts);
}

function buildList(){
    var noteList = getLocal();
    var ulElm = document.querySelector("#forumKommentar");

    ulElm.innerHTML = "";
    var name = localStorage.getItem("name");

    for(var i = 0; i < noteList.length; i++){
        var liElm = document.createElement("li");
        liElm.setAttribute("class", "kommentar_lektion center");

        liElm.innerHTML = "<img class='kommentar_ikon' src='img/header/profil.png'><p class='kommentar_forfatter'>" + name  + "</p><p class='kommentar_tekst'>" + noteList[i].text + "</p>";

        ulElm.appendChild(liElm);
    }
}

function submitNoteEvent(event) {
    var noteText = document.querySelector("#kommentar");

    submitNote(noteText.value);
    buildList();
}

window.onload = function(){
    buildList();
}

var submitNoteBtn = document.querySelector("#addComment");
submitNoteBtn.addEventListener("click", submitNoteEvent);
