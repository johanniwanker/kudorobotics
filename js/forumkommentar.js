function setLocal(localForumposts){
    var jsonData = JSON.stringify(localForumposts);

    localStorage.setItem("forumkommentar", jsonData);
}

function getLocal(){
    var forumkommentar = localStorage.getItem("forumkommentar");
    if(forumkommentar == null){
        return [];
    }else{
        return JSON.parse(forumkommentar);
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

    for(var i = 0; i < noteList.length; i++){
        var liElm = document.createElement("li");
        liElm.setAttribute("class", "list");

        liElm.innerHTML = "<li class='flex space svarene'><div class='flex'><img class='foto' src='img/favicon.png'><div class='margin-l-5'><h3 class='bold'>Bjarne S.</h3><p>" + noteList[i].text + "</p><a href=''><p class='bold blue'>Svar</p></a></div></div><div class='updown flex center'><div class='flex-column'><a href=''><img class='symbol' src='img/upvote.png'></a><a href=''><img class='symbol' src='img/downvote.png'></a></div><div class='flex'><p class='bold'>0</p><p class='margin-l-5'> point</p></div></div></li>";

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
