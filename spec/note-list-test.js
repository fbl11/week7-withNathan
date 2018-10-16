describe('NoteList', () => {
    let noteList = new NoteList ()

    describe('.getNotes', () => {
        it('returns an array of Notes', () => {
            expect(Array.isArray(noteList.getNotes())).toBe(true)
        })
    });
    describe('.createNote', () => {
        it('adds new notes to the notes array', () => {
            let newNote = noteList.createNote('text input');
            expect(noteList.getNotes()).toInclude(newNote);
        })
    })
})
