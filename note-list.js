(function(exports) {

    function NoteList() {
        this.notes = []
    }

    NoteList.prototype = {
        constructor: NoteList,

        getNotes: function() {
            return this.notes
        },

        createNote: function(text) {
            let note = new Note();
            note.updateText(text);
            this.notes.push(note);
            return note;
        },
    }

    exports.NoteList = NoteList;
})(this);