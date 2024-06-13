// Function to change the text content of the paragraph
function changeText() {
    const paragraph = document.getElementById('myParagraph');
    paragraph.textContent = 'New Content by TEXTCONTENT!';
}

function changeHTML() {
    const div = document.getElementById('myDiv');
    div.innerHTML = '<p>New <strong>HTML</strong> content by INNERHTML!</p>'
}