const checkbox = document.getElementById('checkbox');
const notes = document.getElementsByClassName('notes-user');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('white-mode');
});

notes.addEventListener('onclick', () => {
  notes.style.backgroundColor = blue
})