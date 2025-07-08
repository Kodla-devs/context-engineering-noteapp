import { getNotes, saveNotes } from './storage.js';
import { renderNotes, removeNoteFromDOM } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    let notes = getNotes();
    renderNotes(notes);

    const addNoteButton = document.getElementById('add-note');
    const noteTitleInput = document.getElementById('note-title');
    const noteContentInput = document.getElementById('note-content');
    const notesList = document.getElementById('notes-list');

    let editingNoteId = null;

    addNoteButton.addEventListener('click', () => {
        const title = noteTitleInput.value.trim();
        const content = noteContentInput.value.trim();

        if (title === '' || content === '') return;

        if (editingNoteId) {
            notes = notes.map(note => 
                note.id === editingNoteId ? { ...note, title, content } : note
            );
            editingNoteId = null;
        } else {
            const newNote = {
                id: Date.now().toString(),
                title,
                content
            };
            notes.push(newNote);
        }

        saveNotes(notes);
        renderNotes(notes);
        noteTitleInput.value = '';
        noteContentInput.value = '';
        addNoteButton.textContent = 'Kaydet';
    });

    notesList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-note')) {
            const noteElement = e.target.closest('.note-card');
            const noteId = noteElement.dataset.id;
            notes = notes.filter(note => note.id !== noteId);
            saveNotes(notes);
            removeNoteFromDOM(noteId);
        }

        if (e.target.classList.contains('edit-note')) {
            const noteElement = e.target.closest('.note-card');
            const noteId = noteElement.dataset.id;
            const noteToEdit = notes.find(note => note.id === noteId);

            if (noteToEdit) {
                noteTitleInput.value = noteToEdit.title;
                noteContentInput.value = noteToEdit.content;
                editingNoteId = noteId;
                addNoteButton.textContent = 'Güncelle';
            }
        }
    });
});
