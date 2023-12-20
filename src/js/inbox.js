function clickMessage(clickedElement) {
    let inbox = document.getElementById('inbox');
    let sends = document.getElementById('sends');

    clickedElement.parentElement.classList.toggle('common-class-alternative');

    let otherElement = (clickedElement.parentElement.id === 'inbox') ? sends : inbox;
    otherElement.classList.remove('common-class-alternative');
}
