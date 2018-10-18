// let Note = (function(text = '') {
//     let text = text

//     function showText() {
//         return text
//     }

//     function updateText(newString) {
//         text = newString
//     }

//     return {
//         showText,
//         updateText
//     }
// })()

var noteModule = (function() {

    function Note(text) {
        this.text = text
    }

    Note.prototype = {
        showText: function() {
            test()
            return this.text
        }
    }

    return { Note: Note }
})()
