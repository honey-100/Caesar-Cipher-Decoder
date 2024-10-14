document.getElementById('decodeButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const outputText = caesarDecode(document.getElementById('decodeButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const outputText = caesarDecode(inputText, shift);
    document.getElementById('outputText').value = outputText;
});

function caesarDecode(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const offset = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - offset - shift + 26) % 26) + offset);
        }
        return char; // Non-alphabetic characters are unchanged
    }).join('');
}
inputText, shift);
    document.getElementById('outputText').value = outputText;
});

function caesarDecode(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const offset = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - offset - shift + 26) % 26) + offset);
        }
        return char; // Non-alphabetic characters are unchanged
    }).join('');
}
