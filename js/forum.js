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

function submitNote(text, fag, klasse, today){
    var origPosts = getLocal();

    var newNote = {
        text:       text,
        fag:        fag,
        klasse:     klasse,
        today:      today
    };

    origPosts.push(newNote);

    setLocal(origPosts);
}

function buildList(){
    var noteList = getLocal();
    var ulElm = document.querySelector("#forumpostes");

    ulElm.innerHTML = "";
    var name = localStorage.getItem("name");
    var bestName = name.slice(1,-1);

    for(var i = 0; i < noteList.length; i++){
        var liElm = document.createElement("li");
        liElm.setAttribute("class", "list");

        if(noteList[i].fag == "Matematik"){
        liElm.innerHTML = "<a href='forumpost.html' class='kasser'><div class='pointMatematik'><p class='pointTekst'>0</p><p class='kommentarTekst'>0 komm.</p></div><div class='forumTekst'><p class='forumTitel'>" + noteList[i].text + "</p><div class='forumBund'><div class='flexBund'><p class='paddingRight'>" + noteList[i].fag + "</p><p class='paddingRight'> " + noteList[i].klasse + "</p></div><div class='flexBund'><p class='paddingLeft'>" + noteList[i].today + "</p><p class='paddingLeft'>af " + bestName + "</p></div></div></div></a>";
        }
        if(noteList[i].fag == "Dansk"){
        liElm.innerHTML = "<a href='forumpost.html' class='kasser'><div class='pointDansk'><p class='pointTekst'>0</p><p class='kommentarTekst'>0 komm.</p></div><div class='forumTekst'><p class='forumTitel'>" + noteList[i].text + "</p><div class='forumBund'><div class='flexBund'><p class='paddingRight'>" + noteList[i].fag + "</p><p class='paddingRight'> " + noteList[i].klasse + "</p></div><div class='flexBund'><p class='paddingLeft'>" + noteList[i].today + "</p><p class='paddingLeft'>af " + bestName + "</p></div></div></div></a>";
        }
        if(noteList[i].fag == "Kodning"){
        liElm.innerHTML = "<a href='forumpost.html' class='kasser'><div class='pointKodning'><p class='pointTekst'>0</p><p class='kommentarTekst'>0 komm.</p></div><div class='forumTekst'><p class='forumTitel'>" + noteList[i].text + "</p><div class='forumBund'><div class='flexBund'><p class='paddingRight'>" + noteList[i].fag + "</p><p class='paddingRight'> " + noteList[i].klasse + "</p></div><div class='flexBund'><p class='paddingLeft'>" + noteList[i].today + "</p><p class='paddingLeft'>af " + bestName + "</p></div></div></div></a>";
        }

        ulElm.appendChild(liElm);
    }
}

function submitNoteEvent(event) {
    var noteText = document.querySelector("#noteText");
    var noteFag = document.querySelector("#noteFag");
    var noteKlasse = document.querySelector("#noteKlasse");

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();


    if(mm==0){
        mm = "januar";
    }
    if(mm==1){
        mm = "februar";
    }
    if(mm==2){
        mm = "marts";
    }
    if(mm==3){
        mm = "april";
    }
    if(mm==4){
        mm = "maj";
    }
    if(mm==4){
        mm = "juni";
    }
    if(mm==6){
        mm = "juli";
    }
    if(mm==7){
        mm = "august";
    }
    if(mm==8){
        mm = "september";
    }
    if(mm==9){
        mm = "oktober";
    }
    if(mm==10){
        mm = "november";
    }
    if(mm==11){
        mm = "december";
    }

    today = dd + '. ' + mm + ' ' + yyyy;


    submitNote(noteText.value, noteFag.value, noteKlasse.value, today);
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
