var modal = document.querySelector(".modal-bg");

function setLocal(localForumposts){
    var jsonData = JSON.stringify(localForumposts);

    localStorage.setItem("forumpost", jsonData);
}

function getLocal(){
    var forumpost = localStorage.getItem("forumpost");
    if(forumpost == null){
        return [];
    }else{
        return JSON.parse(forumpost);
    }
}

function submitNote(text){
    var origPosts = getLocal();

    var newNote = {
        text:       text,
    };

    origPosts.push(newNote);

    setLocal(origPosts);
}

function buildList(){
    var noteList = getLocal();
    var ulElm = document.querySelector("#forumpostes");

    ulElm.innerHTML = "";

    for(var i = 0; i < noteList.length; i++){
        var liElm = document.createElement("li");
        var pElm = document.createElement("p");


        pElm.innerHTML = "<a href='forumpost.html' class='graaKasser'><div class='pointDansk'><p class='pointTekst'>1</p><p class='kommentarTekst'>0 komm.</p></div><div class='forumTekst'><p class='forumTitel'>" + noteList[i].text + "</p><div class='forumBund'><div class='flexBund'><p class='paddingRight'>Dansk</p><p class='paddingRight'>2. klasse</p></div><div class='flexBund'><p class='paddingLeft'>3. april 2017</p><p class='paddingLeft'>af Bjarne S.</p></div></div></div></a>";

        liElm.appendChild(pElm);
        ulElm.appendChild(liElm);
    }
}

function submitNoteEvent(event) {
    var noteText = document.querySelector("#noteText");

    submitNote(noteText.value);
    buildList();
    modal.style.display = "none";
}

window.onload = function(){
    buildList();
}

var showModalBtn = document.querySelector("#showModal");

showModalBtn.addEventListener("click", function(event){
    modal.style.display = "block";
});

var submitNoteBtn = document.querySelector("#addNote");
submitNoteBtn.addEventListener("click", submitNoteEvent);
