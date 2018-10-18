(function(exports) {

    function NoteList() {
        this.notes = []
    }

    NoteList.prototype = {
        getNotes: function() {
            return this.notes
        },

        createNote: function(text) {
            let note = new Module.Note(text);
            this.notes.push(note);
            return note;
        },
    }

    exports.NoteList = NoteList;
})(Module);

let NoteList = (function () {
    let notes = []

    function getNotes() {
        return notes
    }

    function createNote(text) {
        let note = new Module.Note (text)
        this.notes.push(note)
        return note
    }

    return {
        getNotes,
        createNote
    }
})()