document.addEventListener("DOMContentLoaded", loadNotes);

function saveNote() {
    let noteInput = document.getElementById("noteInput");
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    if (noteInput.value.trim() !== "") {
        notes.push(noteInput.value);
        localStorage.setItem("notes", JSON.stringify(notes));
        noteInput.value = "";
        loadNotes();
    }
}

function loadNotes() {
    let notesList = document.getElementById("notesList");
    notesList.innerHTML = "";
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach((note, Index_NoteWeb) => {
        let li = document.createElement("li");
        li.textContent = note;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.onclick = () => deleteNote(Index_NoteWeb);

        li.appendChild(deleteButton);
        notesList.appendChild(li);
    });
}

function deleteNote(Index_NoteWeb) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(Index_NoteWeb, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}
