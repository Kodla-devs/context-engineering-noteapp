export function createNoteElement(note) {
    const noteCol = document.createElement('div');
    noteCol.classList.add('col-md-4', 'note-card');
    noteCol.dataset.id = note.id;

    const card = document.createElement('div');
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.classList.add('card', `border-${randomColor}`);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = note.title;

    const content = document.createElement('p');
    content.classList.add('card-text');
    content.textContent = note.content;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-outline-danger', 'btn-sm', 'delete-note');
    deleteButton.innerHTML = '<i class="bi bi-trash"></i> Sil';

    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-outline-secondary', 'btn-sm', 'ms-2', 'edit-note');
    editButton.innerHTML = '<i class="bi bi-pencil"></i> Düzenle';

    cardBody.appendChild(title);
    cardBody.appendChild(content);
    cardBody.appendChild(deleteButton);
    cardBody.appendChild(editButton);
    card.appendChild(cardBody);
    noteCol.appendChild(card);

    return noteCol;
}

export function renderNotes(notes) {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';
    notes.forEach(note => {
        const noteElement = createNoteElement(note);
        notesList.appendChild(noteElement);
    });
}

export function removeNoteFromDOM(id) {
    const noteElement = document.querySelector(`[data-id='${id}']`);
    if (noteElement) {
        noteElement.remove();
    }
}
