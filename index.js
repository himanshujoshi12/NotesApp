const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const element = document.createElement("textarea");
  element.id="txtarea"
  
function random(colors){
  return colors[Math.floor(Math.random()*colors.length)];

}
let colors=["cyan","limegreen","yellow","orange","pink","white","lightsalmon","tomato","AntiqueWhite","Azure","Linen","AnitqueWhite","PeachPuff","plum","Tan","SpringGreen"]
// console.log(random(colors))

element.style.backgroundColor=random(colors);


  

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Empty Sticky Note";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Are you sure you wish to delete this sticky note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}
// clock function start
let clock = document.getElementById("displaytime");
setInterval(function(){
  let date = new Date();
  clock.innerHTML =date.toLocaleTimeString();
},1000);
//clock function end 


// color flipper start
function blue(){
   document.body.style.backgroundColor="blue";
}
function orange(){
   document.body.style.backgroundColor="orange";
}
function white(){
   document.body.style.background="white";
}
//color flipper end 