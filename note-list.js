(function(exports) {
    let notes = []

    function NoteList() {

    }

    NoteList.prototype = {
        getNotes: function() {
            return notes
        },

        createNote: function(text) {
            let note = new Note();
            note.updateText(text);
            notes.push(note);
            return note;
        },
    }

    exports.NoteList = NoteList;
})(this);