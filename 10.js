document.getElementById('cleanButton').addEventListener('click', function() {
    const inputHtml = document.getElementById('inputHtml').value;
    const cleanHtml = removeScriptTags(inputHtml);
    document.getElementById('outputHtml').innerText = cleanHtml;
});

function removeScriptTags(html) {
    return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}
