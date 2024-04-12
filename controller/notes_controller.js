
const notesTable = "notes";
function addNote() {
    var noteUserId = sessionStorage.getItem("userId");
    var noteTitle = document.getElementById("noteTitle").value; 
    var noteBody = document.getElementById("bodyNote").value;
    var note = {id:Date.now(),title: noteTitle,body: noteBody,noteUserId: noteUserId};
    if (localStorage.getItem(notesTable) == null) {
        localStorage.setItem(notesTable, JSON.stringify([note]));
    } else {
        var notesList = JSON.parse(localStorage.getItem(notesTable));
        notesList.push(note);
        localStorage.setItem(notesTable, JSON.stringify(notesList));
    }

    window.location.pathname= '../view/home.html';
}

function deleteNote(note) {
    console.log("FFF");
    var notesList = JSON.parse(localStorage.getItem(notesTable));
    console.log(note.id);
    var newNotes = notesList.filter((value) => {
        console.log(value);
        return value.id != note.id;
    });
    console.log(notesList)
    console.log(newNotes);
    localStorage.clear()
    localStorage.setItem(notesTable, JSON.stringify(newNotes));
    window.location.pathname = "../view/home.html"
}

function showNotes() {
    var notesList = JSON.parse(localStorage.getItem(notesTable))
    console.log(notesList)
    if(notesList != null){
        var notesGrid = document.getElementById("notes");
        for (const note of notesList) {
            var card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <div style="width:100%; display: flex;justify-content: space-between;align-items: center;">
                    <h1>${note.title}</h1>
                    <i id="${note.id}" onclick='deleteNote(this)' class="fa fa-trash-o" style="font-size:24px;cursor:hand;"></i>
                </div>
                <p>${note.body}</p>
            `;
            notesGrid.appendChild(card);
    }
    
    }
}

