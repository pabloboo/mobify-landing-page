let currentPage = 1;
const totalPages = 5;

function scrollNext() {
    if (currentPage < totalPages) {
        currentPage++;
        document.getElementById('page' + currentPage).scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollPrev() {
    if (currentPage > 1) {
        currentPage--;
        document.getElementById('page' + currentPage).scrollIntoView({ behavior: 'smooth' });
    }
}

function goToFirstPage() {
    currentPage = 1;
    document.getElementById('page1').scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        scrollNext();
    } else {
        scrollPrev();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        scrollNext();
    } else if (event.key === 'ArrowUp') {
        scrollPrev();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('page1').scrollIntoView({ behavior: 'smooth' });
}); 

// Add slide effect on touch devices
let yDown = null;

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!yDown) {
        return;
    }

    const yUp = evt.touches[0].clientY;
    const yDiff = yDown - yUp;

    if (Math.abs(yDiff) > 50) { // threshold to detect swipe
        if (yDiff > 0) { // Swipe up
            scrollNext();
        } else { // Swipe down
            scrollPrev();
        }
        yDown = null;
    }
}