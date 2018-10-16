let Note = (function() {
    let text = ''

    function showText() {
        return text
    }

    function updateText(newString) {
        text = newString
    }

    return {
        showText,
        updateText
    }
});