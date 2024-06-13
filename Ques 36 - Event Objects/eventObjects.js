/*
    Both 'event.preventDefault()' and 'event.stopPropogation()'
    are methods available on event objects in JavaScript, particularly
    useful when handling events in the DOM.

    'event.preventDefault()' -
        It prevent the default action of an event from occuring.
        Typically used to stop form submission, prevent a link to
        navigating to a new page.
        or prevent default behavior of certain keys.
*/

const link = document.getElementById('myLink');

link.addEventListener('click', function(event) {
    // Prevent the default action of the click event
    event.preventDefault();

    // Perform custom actions here instead
    console.log('Link clicked,  but default action prevented.');
});

/*
    'event.stopPropogation()' -
        Stops the event from propogating (bubbling up) to parent
        elements in the DOM after it has been handled by the current
        element.

        used to prevent parent elements from receiving the same event.
*/

const childDiv = document.getElementById('childDiv');
const parentDiv = document.getElementById('parentDiv');

childDiv.addEventListener('click', function(event) {
    // Stop the event from propogating to parent elements
    event.stopPropagation();

    //Perform actions specific to the childDiv
    console.log('Child div clicked, event propogation stopped.');
});

parentDiv.addEventListener('click', function(event) {
    // This function will not execute when the childDiv is clicked
    console.log('Parent div clicked, event bubbled up.');
});

// `event.preventDefault()` when you want to prevent the default behaviour
// of an event (e.g., prevent a link from navigating)

// `event/stopPropogation()` when you want to stop an event from bubbling
// up to parent elements in DOM.